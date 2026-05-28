from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from app.core.database import get_db
from app.models.stadium import Zone
from app.schemas.stadium import ZoneCreate, ZoneResponse

router = APIRouter(prefix="/zones", tags=["zones"])

@router.post("/", response_model=ZoneResponse)
async def create_zone(zone_in: ZoneCreate, db: AsyncSession = Depends(get_db)):
    new_zone = Zone(
        name=zone_in.name,
        max_capacity=zone_in.max_capacity
    )
    db.add(new_zone)
    await db.commit()
    await db.refresh(new_zone)
    return new_zone

@router.get("/", response_model=List[ZoneResponse])
async def get_stadium_zones(db: AsyncSession = Depends(get_db)):
    # Crucial endpoint for building the Heatmap
    result = await db.execute(select(Zone))
    return result.scalars().all()
