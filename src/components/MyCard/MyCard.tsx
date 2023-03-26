import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import '../MyCard/card.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cartActions } from '../../features/CartList/cartSlice';

const MyCard: React.FC = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  return (
    <Row className='mt-5'>
      {products?.map((el) => {
        return (
          <Col lg={4} md={6} sm={12} key={el.id} className='d-flex justify-content-center align-items-start mt-4'>
            <Card key={el.id}>
              <Card.Img variant='top' src={el.image} />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text className='text-left d-block'>${el.price}</Card.Text>
                <Button variant='success' onClick={() => dispatch(cartActions.addToCart(el))}>
                  ADD TO CART
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>

    // <Row className='mt-5'>
    //   {products
    //     ?.filter((el) => {
    //       if (filtered.length > 1) {
    //         return el.category === filtered.toLowerCase();
    //       } else if (filterPrice === 'low') {
    //         return el.price <= 20;
    //       } else if (filterPrice === 'expensive') {
    //         return el.price >= 20;
    //       } else return el;
    //     })
    //     .map((el) => {
    //       return (
    //         <Col lg={4} md={6} sm={12} key={el.id} className='d-flex justify-content-center align-items-start mt-4'>
    //           <Card key={el.id}>
    //             <Card.Img variant='top' src={el.image} />
    //             <Card.Body>
    //               <Card.Title>{el.title}</Card.Title>
    //               <Card.Text className='text-left d-block'>${el.price}</Card.Text>
    //               <Button variant='success' onClick={() => addToCart(el)}>
    //                 ADD TO CART
    //               </Button>
    //             </Card.Body>
    //           </Card>
    //         </Col>
    //       );
    //     })}
    // </Row>
  );
};

export default MyCard;
