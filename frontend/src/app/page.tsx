import Order from '../components/Order';
import Stock from '../components/Stock';
import { Container, Typography } from '@mui/material'
import { fetchOrder, fetchStock } from '../utils/api';

const Home = async () => {
  const order = await fetchOrder();
  const stock = await fetchStock();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Bar Orders
      </Typography>            
      <Order rounds={order.rounds} />
      <Typography variant="h3" gutterBottom>
        Inventory
      </Typography>
      <Stock lastUpdated={stock.last_updated} beers={stock.beers} />
    </Container>
  );
};

export default Home;
