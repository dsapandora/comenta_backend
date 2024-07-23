from fastapi import APIRouter
from app.services import get_stock, get_order
from app.schemas import Order, Stock

router = APIRouter()

@router.get("/order", response_model=Order)
def read_order():
    return get_order()

@router.get("/stock", response_model=Stock)
def read_stock():
    return get_stock()
