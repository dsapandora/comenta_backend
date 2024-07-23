from fastapi import FastAPI
from app.routers import order

app = FastAPI()

@app.get("/")
def read_root():
    return {"status": 200}

app.include_router(order.router)

