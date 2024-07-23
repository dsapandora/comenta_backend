'use client';

import { Card, CardContent, Typography } from '@mui/material'

interface Beer {
  name: string
  price: number
  quantity: number
}

interface StockProps {
  lastUpdated: string
  beers: Beer[]
}

const Stock: React.FC<StockProps> = ({ lastUpdated, beers }) => {
  return (
    <Card variant="outlined" className="mb-4">
      <CardContent>
        <Typography variant="h6" component="div">
          Stock - Last Updated: {new Date(lastUpdated).toLocaleString()}
        </Typography>
        <ul className="list-disc pl-5">
          {beers.map((beer, index) => (
            <li key={index}>
              {beer.name} - ${beer.price} - Quantity: {beer.quantity}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Stock