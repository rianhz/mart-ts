import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import '../MyCard/card.css';
import { useAppDispatch } from '../../app/hooks';
import { cartActions } from '../../features/CartList/cartSlice';
import { ProductType } from '../../features/ProductTypes';

type PropsTypes = {
  products : ProductType[]
  selected : string
  filteredPrice : string
  inputFiltered : string
}

const MyCard: React.FC<PropsTypes> = ({products,selected,filteredPrice,inputFiltered}) => {
  
  const dispatch = useAppDispatch();
    
  return (
    <Row className='mt-5'>
      {products?.filter((el) => {
        if(selected !== ''){
          return el.category.toLowerCase().trim() === selected.toLowerCase().trim()
        } else if( filteredPrice === 'low'){
          return el.price <= 40
        } else if( filteredPrice === 'expensive'){
          return el.price > 40
        } else if(inputFiltered.length > 2){
          return el.title.toLowerCase().trim().includes(inputFiltered.toLowerCase().trim())
        } else{
          return el
        }
      })
      .map((el) => {
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
  );
};

export default MyCard;
