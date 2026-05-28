from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from app.core.database import get_db
from app.models.event import Event
from app.schemas.event import EventCreate, EventResponse
import uuid

router = APIRouter(prefix="/events", tags=["events"])

@router.post("/", response_model=EventResponse, status_code=status.HTTP_201_CREATED)
async def create_event(event_in: EventCreate, db: AsyncSession = Depends(get_db)):
    new_event = Event(
        title=event_in.title,
        start_time=event_in.start_time,
        end_time=event_in.end_time,
        status=event_in.status
    )
    db.add(new_event)
    await db.commit()
    await db.refresh(new_event)
    return new_event

@router.get("/", response_model=List[EventResponse])
async def list_events(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Event))
    events = result.scalars().all()
    return events

@router.get("/{event_id}", response_model=EventResponse)
async def get_event(event_id: uuid.UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Event).where(Event.id == event_id))
    event = result.scalar_one_or_none()
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return event
