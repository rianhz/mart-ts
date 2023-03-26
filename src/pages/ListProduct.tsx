import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import axios from 'axios';
import FilterBy from '../components/FilterBy/FilterBy';
import HeaderMart from '../components/Header/HeaderMart';
import MyCard from '../components/MyCard/MyCard';
import MyCart from '../components/Cart/MyCart';
import { productActions } from '../features/ProductList/ProductSlice';

const ListProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('http://localhost:3000/product').then((res) => {
      dispatch(productActions.getProducts(res.data));
    });
  }, [dispatch]);

  console.log(products);

  return (
    <>
      <HeaderMart handleShow={handleShow} />
      <FilterBy />
      <MyCard />
      <MyCart show={show} handleClose={handleClose} />
    </>
  );
};

export default ListProduct;
