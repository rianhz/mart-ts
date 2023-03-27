import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import axios from 'axios';
import FilterBy from '../components/FilterBy/FilterBy';
import MyCard from '../components/MyCard/MyCard';
import { productActions } from '../features/ProductList/ProductSlice';

const ListProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  const [selected,setSelected] = useState<string>('')
  const [filteredPrice,setFilteredPrice] = useState<string>('')
  const [inputFiltered,setInputFiltered] = useState<string>('')
 
  const [spinner,setSpinner] = useState<boolean>(true)

  useEffect(() => {
    axios.get('https://6406bf75862956433e58b05e.mockapi.io/restaurants').then((res) => {
      dispatch(productActions.getProducts(res.data));
    }).finally(() => setSpinner(false));
  }, [dispatch]);

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
  }

  const handlePrice = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setFilteredPrice(e.target.value)
  }

  const handleInputFilter = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputFiltered(e.target.value)
  }
 
  return (
    <>
      <FilterBy handleSelect={handleSelect} handlePrice={handlePrice} handleInputFilter={handleInputFilter}/>
      <MyCard products={products} selected={selected} filteredPrice={filteredPrice} inputFiltered={inputFiltered} spinner={spinner}/>
      

    </>
  );
};

export default ListProduct;
