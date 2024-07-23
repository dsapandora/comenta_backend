// src/utils/api.test.ts
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchOrder, fetchStock } from './api';

const mock = new MockAdapter(axios);
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

describe('API Utils', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetches order data successfully', async () => {
    const orderData = { /* Mock order data */ };
    mock.onGet(`${backendUrl}/order`).reply(200, orderData);

    const data = await fetchOrder();
    expect(data).toEqual(orderData);
  });

  it('fetches stock data successfully', async () => {
    const stockData = { /* Mock stock data */ };
    mock.onGet(`${backendUrl}/stock`).reply(200, stockData);

    const data = await fetchStock();
    expect(data).toEqual(stockData);
  });
});
