import { useState } from 'react';
import { Container } from 'react-bootstrap';
import MyCart from './components/Cart/MyCart';
import NavigationBar from './components/Navbar/NavigationBar';
import ListProduct from './pages/ListProduct';

function App() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
       <Container>
        <NavigationBar handleShow={handleShow}/>
        <ListProduct />
        <MyCart show={show} handleClose={handleClose}  />
      </Container>
    </div>
  );
}

export default App;
