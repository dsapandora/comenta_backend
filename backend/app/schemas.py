from pydantic import BaseModel
from datetime import datetime
from typing import List

class Beer(BaseModel):
    name: str
    price: int
    quantity: int

class Stock(BaseModel):
    last_updated: datetime
    beers: List[Beer]

class OrderItem(BaseModel):
    name: str
    quantity: int

class Round(BaseModel):
    created: datetime
    items: List[OrderItem]

class Order(BaseModel):
    created: datetime
    paid: bool
    subtotal: int
    taxes: int
    discounts: int
    items: List[OrderItem]
    rounds: List[Round]
