from fastapi import APIRouter, HTTPException
from models.lead import LoginRequest, LoginResponse
import jwt
from datetime import datetime, timedelta, timezone
import os

router = APIRouter()

# Chave secreta para JWT
SECRET_KEY = os.environ.get("JWT_SECRET", "eleva-secret-key-2026-change-in-production")

# Credenciais admin padrão (em produção, usar database com hash)
ADMIN_EMAIL = "admin@elevaweb.com"
ADMIN_PASSWORD = "Eleva2026!"  # MUDAR EM PRODUÇÃO

@router.post("/auth/login", response_model=LoginResponse)
async def login(credentials: LoginRequest):
    """Login para acesso à dashboard administrativa"""
    
    # Verificar credenciais
    if credentials.email != ADMIN_EMAIL or credentials.password != ADMIN_PASSWORD:
        raise HTTPException(
            status_code=401,
            detail="Email ou password incorretos"
        )
    
    # Gerar JWT token (válido por 24 horas)
    payload = {
        "email": ADMIN_EMAIL,
        "name": "Admin ELEVA",
        "exp": datetime.now(timezone.utc) + timedelta(hours=24)
    }
    
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    
    return LoginResponse(
        token=token,
        email=ADMIN_EMAIL,
        name="Admin ELEVA"
    )

@router.post("/auth/verify", response_model=dict)
async def verify_token(token: str):
    """Verificar se o token JWT é válido"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return {"valid": True, "email": payload.get("email")}
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expirado")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Token inválido")
