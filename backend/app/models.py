from datetime import datetime
from typing import List

class Beer:
    def __init__(self, name: str, price: int, quantity: int):
        self.name = name
        self.price = price
        self.quantity = quantity

class Stock:
    def __init__(self, last_updated: datetime, beers: List[Beer]):
        self.last_updated = last_updated
        self.beers = beers

class OrderItem:
    def __init__(self, name: str, quantity: int):
        self.name = name
        self.quantity = quantity

class Round:
    def __init__(self, created: datetime, items: List[OrderItem]):
        self.created = created
        self.items = items

class Order:
    def __init__(self, created: datetime, paid: bool, subtotal: int, taxes: int, discounts: int, items: List[OrderItem], rounds: List[Round]):
        self.created = created
        self.paid = paid
        self.subtotal = subtotal
        self.taxes = taxes
        self.discounts = discounts
        self.items = items
        self.rounds = rounds
