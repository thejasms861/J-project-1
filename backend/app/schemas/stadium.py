from pydantic import BaseModel
from typing import Optional, List
from uuid import UUID

class ZoneBase(BaseModel):
    name: str
    max_capacity: int

class ZoneCreate(ZoneBase):
    pass

class ZoneResponse(ZoneBase):
    id: UUID
    current_occupancy: int

    class Config:
        from_attributes = True

class VendorBase(BaseModel):
    name: str
    category: str
    zone_id: UUID

class VendorCreate(VendorBase):
    pass

class VendorResponse(VendorBase):
    id: UUID
    is_active: bool

    class Config:
        from_attributes = True
