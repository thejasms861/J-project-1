from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import engine
from app.models import Base

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create tables on startup for prototyping (in prod, use Alembic)
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield

app = FastAPI(
    title="Smart Stadium API",
    description="Backend for the Smart Stadium Experience Platform",
    version="1.0.0",
    lifespan=lifespan
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Smart Stadium API"}

@app.get("/health")
async def health_check():
    return {"status": "ok"}
