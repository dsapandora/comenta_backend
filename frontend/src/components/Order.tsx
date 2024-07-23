'use client';
import { Card, CardContent, Typography } from '@mui/material'

interface OrderItem {
  name: string
  quantity: number
}

interface Round {
  created: string
  items: OrderItem[]
}

interface OrderProps {
  rounds: Round[]
}

const Order: React.FC<OrderProps> = ({ rounds }) => {
  return (
    <div className="p-4">
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      {rounds.map((round, index) => (
        <Card key={index} variant="outlined" className="mb-4">
          <CardContent>
            <Typography variant="h6" component="div">
              Round {index + 1} - {new Date(round.created).toLocaleString()}
            </Typography>
            <ul className="list-disc pl-5">
              {round.items.map((item, i) => (
                <li key={i}>
                  {item.name} - {item.quantity}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Order
