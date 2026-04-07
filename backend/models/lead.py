from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from enum import Enum

class RevenueRange(str, Enum):
    A = "A"  # Até 2.500€
    B = "B"  # 2.500€ – 7.500€
    C = "C"  # 7.500€ – 15.000€
    D = "D"  # Mais de 15.000€

class LeadStatus(str, Enum):
    NEW = "novo"
    CONTACTED = "contactado"
    INTERESTED = "interessado"
    CLOSED = "fechado"
    LOST = "perdido"

class LeadCreate(BaseModel):
    fullName: str = Field(..., min_length=1, max_length=200)
    companyAndSector: str = Field(..., min_length=1, max_length=300)
    phone: str = Field(..., min_length=1, max_length=50)
    revenue: RevenueRange

class LeadResponse(BaseModel):
    id: str
    fullName: str
    companyAndSector: str
    phone: str
    revenue: str
    status: str
    createdAt: str
    updatedAt: Optional[str] = None

class LeadStatusUpdate(BaseModel):
    status: LeadStatus

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class LoginResponse(BaseModel):
    token: str
    email: str
    name: str
