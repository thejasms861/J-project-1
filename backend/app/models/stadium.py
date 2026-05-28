import uuid
from sqlalchemy import Column, String, Integer, ForeignKey, Boolean
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.core.database import Base

class Zone(Base):
    __tablename__ = "zones"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    max_capacity = Column(Integer, nullable=False)
    current_occupancy = Column(Integer, default=0)
    
    tickets = relationship("Ticket", back_populates="zone")
    vendors = relationship("Vendor", back_populates="zone")


class Vendor(Base):
    __tablename__ = "vendors"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    zone_id = Column(UUID(as_uuid=True), ForeignKey("zones.id"))
    name = Column(String, nullable=False)
    category = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    
    zone = relationship("Zone", back_populates="vendors")
