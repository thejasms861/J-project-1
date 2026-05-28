import uuid
from datetime import datetime
from sqlalchemy import Column, String, DateTime, ForeignKey, Boolean
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.core.database import Base

class Event(Base):
    __tablename__ = "events"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)
    status = Column(String, default="UPCOMING") # UPCOMING, LIVE, ENDED
    
    tickets = relationship("Ticket", back_populates="event")


class Ticket(Base):
    __tablename__ = "tickets"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    event_id = Column(UUID(as_uuid=True), ForeignKey("events.id"))
    zone_id = Column(UUID(as_uuid=True), ForeignKey("zones.id"))
    seat_number = Column(String, nullable=False)
    dynamic_qr_hash = Column(String, unique=True, index=True)
    is_scanned = Column(Boolean, default=False)
    
    event = relationship("Event", back_populates="tickets")
    zone = relationship("Zone", back_populates="tickets")
