import logo from '../../images/logo.jpg'
import { Container,  Navbar } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAppSelector } from '../../app/hooks';
import './navi.css'

type PropsTypes = {
    handleShow: () => void;
}

const NavigationBar:React.FC<PropsTypes> = ({handleShow}) => {

    const cartItem = useAppSelector((state) => state.cart)

  return (
    <Navbar bg="dark" variant='dark' expand="lg" fixed='top' className='pt-2 pb-2'>
      <Container >
        <Navbar.Brand href="#">
            <img src={logo} alt="Logo" width="50"
              height="50"
              className="rounded-circle d-inline-block align-top"
             /> 
             <Navbar.Text className='ms-2 d-inline-block align-top'>
                MeepoMart
            </Navbar.Text>
        </Navbar.Brand>
       
        <div className='icons-wrapper position-relative rounded-circle text-light p-1 ' onClick={handleShow}>
          <AiOutlineShoppingCart style={{ fontSize: '30px' }} />
          {cartItem.length < 1 ? '' : <p className='totalCart'>{cartItem.length}</p>}
        </div>
       
      </Container>
    </Navbar>
  )
}

export default NavigationBar