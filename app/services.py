from datetime import datetime
from app.models import Stock, Order, Beer, OrderItem, Round

# Dummy data for stock
stock = Stock(
    last_updated=datetime(2024, 9, 10, 12, 0, 0),
    beers=[
        Beer(name="Corona", price=115, quantity=2),
        Beer(name="Quilmes", price=120, quantity=0),
        Beer(name="Club Colombia", price=110, quantity=3)
    ]
)

# Dummy data for order
order = Order(
    created=datetime(2024, 9, 10, 12, 0, 0),
    paid=False,
    subtotal=0,
    taxes=0,
    discounts=0,
    items=[],
    rounds=[
        Round(
            created=datetime(2024, 9, 10, 12, 0, 30),
            items=[
                OrderItem(name="Corona", quantity=2),
                OrderItem(name="Club Colombia", quantity=1)
            ]
        ),
        Round(
            created=datetime(2024, 9, 10, 12, 20, 31),
            items=[
                OrderItem(name="Club Colombia", quantity=1),
                OrderItem(name="Quilmes", quantity=2)
            ]
        ),
        Round(
            created=datetime(2024, 9, 10, 12, 43, 21),
            items=[
                OrderItem(name="Quilmes", quantity=3)
            ]
        )
    ]
)

def get_stock() -> Stock:
    return stock

def get_order() -> Order:
    return order
