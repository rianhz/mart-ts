import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiFillPlusSquare } from 'react-icons/ai';
import { AiFillMinusSquare } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cartActions } from '../../features/CartList/cartSlice';
import { ProductType } from '../../features/ProductTypes';
import './cart.css';

type PropsTypes = {
  show: boolean;
  handleClose: () => void;
};

const MyCart: React.FC<PropsTypes> = ({ show, handleClose }) => {
  const cartItem = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch()
 
  const totalPrice =(arr:ProductType[]) => arr.reduce((acc,curr) => (acc + curr.total_price),0)

  return (
    <Offcanvas show={show} onHide={handleClose} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Total : ${totalPrice(cartItem).toFixed(2)}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='position-relative'>
        {cartItem.length === 0 ? (
          <p>No Items yet</p>
        ) : (
          cartItem?.map((el, i) => {
            return (
              <div className='cart-body' key={i}>
                <div className='cartText'>
                  <h5>{el.title}</h5>
                  <div className='cartRow2'>
                    <p>Price : ${el.price}</p>
                    <p>Total : ${el.total_price.toFixed(2)}</p>
                  </div>
                  <div className='cartRow3'>
                    <AiFillMinusSquare style={{ fontSize: '35px', cursor: 'pointer' }} onClick={() => dispatch(cartActions.removeQuantity(el))} />

                    <div>
                      <h5>{el.quantity}</h5>
                    </div>

                    <AiFillPlusSquare style={{ fontSize: '35px', cursor: 'pointer' }} onClick={() => dispatch(cartActions.addQuantity(el))} />
                  </div>
                </div>
              </div>
            );
          })
        )}
          <div className='total'>
            <Button variant='success'>Checkout</Button>
          </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MyCart;
