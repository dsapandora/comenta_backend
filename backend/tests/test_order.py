import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_order():
    response = client.get("/order")
    assert response.status_code == 200
    data = response.json()
    assert "created" in data
    assert "paid" in data
    assert "subtotal" in data
    assert "taxes" in data
    assert "discounts" in data
    assert "items" in data
    assert "rounds" in data

def test_read_stock():
    response = client.get("/stock")
    assert response.status_code == 200
    data = response.json()
    assert "last_updated" in data
    assert "beers" in data
    assert isinstance(data["beers"], list)
