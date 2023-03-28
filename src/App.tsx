import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAppDispatch } from './app/hooks';
import MyCart from './components/Cart/MyCart';
import NavigationBar from './components/Navbar/NavigationBar';
import { productActions } from './features/ProductList/ProductSlice';
import { ProductType } from './features/ProductTypes';
import ListProduct from './pages/ListProduct';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    axios.get('https://6406bf75862956433e58b05e.mockapi.io/restaurants').then((res) => {
      dispatch(productActions.getProducts(res.data));
      setFiltering(res.data)
    }).finally(() => setSpinner(false));

  }, [dispatch]);


  const [filtering,setFiltering] = useState<ProductType[]>([])

  
 
  const [spinner,setSpinner] = useState<boolean>(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
       <Container>
        <NavigationBar handleShow={handleShow}/>
        <ListProduct setFiltering={setFiltering} filtering={filtering} spinner={spinner} />
        <MyCart show={show} handleClose={handleClose}  />
      </Container>
    </div>
  );
}

export default App;
