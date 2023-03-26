import React from 'react';
import  './header.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../../app/hooks';

type PropsTypes = {
  handleShow: () => void;
};

const HeaderMart: React.FC<PropsTypes> = ({ handleShow }) => {
  const cartItem = useAppSelector((state) => state.cart);
  return (
    <Container fluid className='fixed-top pb-3 pt-3 bg-light'>
      <div className='containers'>
        <h1 className='title-text'>Mart</h1>
        <div className='groupIcon' onClick={handleShow}>
          <AiOutlineShoppingCart style={{ fontSize: '30px' }} />
          {cartItem.length < 1 ? '' : <p className='length'>{cartItem.length}</p>}
        </div>
      </div>
    </Container>
  );
};

export default HeaderMart;
