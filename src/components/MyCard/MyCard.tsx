import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../MyCard/card.css';
import { useAppDispatch } from '../../app/hooks';
import { cartActions } from '../../features/CartList/cartSlice';
import { ProductType } from '../../features/ProductTypes';
import {motion} from 'framer-motion'

type PropsTypes = {
  prod : ProductType
}

const MyCard: React.FC<PropsTypes> = ({prod}) => {
  
  const dispatch = useAppDispatch();
  return (
  
        <motion.div layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}>
            <Card className='mt-2'>
              <Card.Img variant='top' src={prod.image} />
                <Card.Body>
                  <Card.Title>{prod.title}</Card.Title>
                  <Card.Text className='text-center d-block'>${prod.price}</Card.Text>
                  <Button variant='success' onClick={() => dispatch(cartActions.addToCart(prod))}>
                    ADD TO CART
                  </Button>
                </Card.Body>
            </Card> 
         
        </motion.div>
  
   
  );
};

export default MyCard;
