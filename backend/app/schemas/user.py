from pydantic import BaseModel, EmailStr
from typing import Optional
from uuid import UUID
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    role: Optional[str] = "USER"

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: UUID
    loyalty_points: int
    created_at: datetime
    is_active: bool

    class Config:
        from_attributes = True
