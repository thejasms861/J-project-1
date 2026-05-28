from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from app.core.database import get_db
from app.models.event import Ticket, Event
from app.models.user import User
from app.schemas.event import TicketCreate, TicketResponse
import uuid
import hashlib
import time

router = APIRouter(prefix="/tickets", tags=["tickets"])

def generate_dynamic_qr(user_id: uuid.UUID, event_id: uuid.UUID) -> str:
    # Generates a QR hash that changes based on time window (e.g. 30s) to prevent scalping/screenshots
    time_window = int(time.time() / 30)
    raw = f"{user_id}:{event_id}:{time_window}"
    return hashlib.sha256(raw.encode()).hexdigest()

@router.post("/book", response_model=TicketResponse, status_code=status.HTTP_201_CREATED)
async def book_ticket(ticket_in: TicketCreate, user_id: uuid.UUID, db: AsyncSession = Depends(get_db)):
    # In production, user_id would come from JWT Token Dependency
    qr_hash = generate_dynamic_qr(user_id, ticket_in.event_id)
    
    new_ticket = Ticket(
        user_id=user_id,
        event_id=ticket_in.event_id,
        zone_id=ticket_in.zone_id,
        seat_number=ticket_in.seat_number,
        dynamic_qr_hash=qr_hash
    )
    db.add(new_ticket)
    await db.commit()
    await db.refresh(new_ticket)
    return new_ticket

@router.get("/my-tickets", response_model=List[TicketResponse])
async def get_my_tickets(user_id: uuid.UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Ticket).where(Ticket.user_id == user_id))
    return result.scalars().all()
