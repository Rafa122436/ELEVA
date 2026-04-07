from fastapi import APIRouter, HTTPException, Depends, Header
from typing import List, Optional
from datetime import datetime, timezone
from uuid import uuid4
import os
import jwt
from models.lead import LeadCreate, LeadResponse, LeadStatusUpdate, LeadStatus

router = APIRouter()

# Chave secreta para JWT (em produção, usar env variable)
SECRET_KEY = os.environ.get("JWT_SECRET", "eleva-secret-key-2026-change-in-production")

# Função para verificar token JWT
def verify_token(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token não fornecido")
    
    token = authorization.split(" ")[1]
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expirado")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Token inválido")

@router.post("/leads", response_model=dict)
async def create_lead(lead: LeadCreate):
    """Criar novo lead a partir do formulário"""
    from server import db
    
    lead_data = {
        "id": str(uuid4()),
        "fullName": lead.fullName,
        "companyAndSector": lead.companyAndSector,
        "phone": lead.phone,
        "revenue": lead.revenue.value,
        "status": LeadStatus.NEW.value,
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "updatedAt": None
    }
    
    await db.leads.insert_one(lead_data)
    
    return {
        "success": True,
        "message": "Lead criado com sucesso",
        "id": lead_data["id"]
    }

@router.get("/leads", response_model=List[LeadResponse])
async def get_leads(
    status: Optional[str] = None,
    revenue: Optional[str] = None,
    search: Optional[str] = None,
    current_user = Depends(verify_token)
):
    """Listar todos os leads com filtros opcionais (requer autenticação)"""
    from server import db
    
    # Construir query
    query = {}
    
    if status:
        query["status"] = status
    
    if revenue:
        query["revenue"] = revenue
    
    if search:
        query["$or"] = [
            {"fullName": {"$regex": search, "$options": "i"}},
            {"companyAndSector": {"$regex": search, "$options": "i"}}
        ]
    
    # Buscar leads
    leads = await db.leads.find(query, {"_id": 0}).sort("createdAt", -1).to_list(1000)
    
    return leads

@router.patch("/leads/{lead_id}/status", response_model=dict)
async def update_lead_status(
    lead_id: str,
    status_update: LeadStatusUpdate,
    current_user = Depends(verify_token)
):
    """Atualizar status de um lead (requer autenticação)"""
    from server import db
    
    result = await db.leads.update_one(
        {"id": lead_id},
        {
            "$set": {
                "status": status_update.status.value,
                "updatedAt": datetime.now(timezone.utc).isoformat()
            }
        }
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Lead não encontrado")
    
    return {"success": True, "message": "Status atualizado com sucesso"}

@router.get("/leads/stats", response_model=dict)
async def get_leads_stats(current_user = Depends(verify_token)):
    """Obter estatísticas dos leads (requer autenticação)"""
    from server import db
    from datetime import timedelta
    
    now = datetime.now(timezone.utc)
    today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    week_start = now - timedelta(days=7)
    
    # Total de leads
    total = await db.leads.count_documents({})
    
    # Leads de hoje
    today = await db.leads.count_documents({
        "createdAt": {"$gte": today_start.isoformat()}
    })
    
    # Leads da semana
    this_week = await db.leads.count_documents({
        "createdAt": {"$gte": week_start.isoformat()}
    })
    
    # Leads por status
    status_counts = {}
    for status in LeadStatus:
        count = await db.leads.count_documents({"status": status.value})
        status_counts[status.value] = count
    
    return {
        "total": total,
        "today": today,
        "thisWeek": this_week,
        "byStatus": status_counts
    }
