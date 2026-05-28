from pydantic import BaseModel
from typing import Optional, List
from uuid import UUID
from datetime import datetime

class EventBase(BaseModel):
    title: str
    start_time: datetime
    end_time: datetime
    status: Optional[str] = "UPCOMING"

class EventCreate(EventBase):
    pass

class EventResponse(EventBase):
    id: UUID

    class Config:
        from_attributes = True

class TicketBase(BaseModel):
    event_id: UUID
    zone_id: UUID
    seat_number: str

class TicketCreate(TicketBase):
    pass

class TicketResponse(TicketBase):
    id: UUID
    user_id: UUID
    dynamic_qr_hash: str
    is_scanned: bool

    class Config:
        from_attributes = True
