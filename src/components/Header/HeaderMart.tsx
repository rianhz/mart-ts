import React from 'react';
import styles from './header.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../../app/hooks';

type PropsTypes = {
  handleShow: () => void;
};

const HeaderMart: React.FC<PropsTypes> = ({ handleShow }) => {
  const cartItem = useAppSelector((state) => state.cart);
  return (
    <Container fluid className='pb-2 pt-2 fixed-top bg-light'>
      <div className={styles.container}>
        <h1 className={styles.title}>Mart</h1>
        <div className={styles.groupIcon} onClick={handleShow}>
          <AiOutlineShoppingCart style={{ fontSize: '30px' }} />
          {cartItem.length < 1 ? '' : <p className={styles.length}>{cartItem.length}</p>}
        </div>
      </div>
    </Container>
  );
};

export default HeaderMart;
