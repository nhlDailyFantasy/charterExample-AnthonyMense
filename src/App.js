import { Box } from '@mui/material';
import './App.css';
import HeaderAppBar from './features/HeaderAppBar/HeaderAppBar';
import DisplayCustomerPurchases from './features/DisplayCustomerPurchases/DisplayCustomerPurchases';

function App() {
  return (
    <Box className="App">
      <HeaderAppBar/>
      <DisplayCustomerPurchases/>
    </Box>
  );
}

export default App;
