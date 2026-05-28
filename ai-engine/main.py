from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI(title="Smart Stadium AI Engine", description="Machine Learning microservice for predictive analytics")

class PredictionRequest(BaseModel):
    zone_id: str
    time_of_day: str  # e.g., "14:30"
    weather: str      # e.g., "sunny", "rainy"
    event_type: str   # e.g., "concert", "football"

@app.post("/predict/density")
async def predict_density(req: PredictionRequest):
    # Mocking an ML prediction (XGBoost/RandomForest)
    # In production, this loads a pickled model via joblib and runs inference
    base_occupancy = 50
    if req.weather == "rainy":
        base_occupancy += 20 # People rush indoors
    if req.event_type == "concert":
        base_occupancy += 15
        
    predicted_occupancy = min(base_occupancy + random.randint(-10, 20), 100)
    
    return {
        "zone_id": req.zone_id,
        "predicted_occupancy_percent": predicted_occupancy,
        "status": "CRITICAL" if predicted_occupancy > 85 else "NORMAL",
        "action": "ROUTE_TO_ALTERNATIVE" if predicted_occupancy > 85 else "NONE"
    }

@app.get("/health")
async def health():
    return {"status": "ok", "model_version": "v1.0.4"}
