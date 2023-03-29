import React, { useEffect, useState } from 'react';
import {  useAppSelector } from '../app/hooks';
import FilterBy from '../components/FilterBy/FilterBy';
import MyCard from '../components/MyCard/MyCard';
import { ProductType } from '../features/ProductTypes';
import { Spinner } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap'

type PropsTypes = {
  filtering : ProductType[]
  setFiltering : React.Dispatch<React.SetStateAction<ProductType[]>>
  spinner : boolean
}

const ListProduct: React.FC<PropsTypes> = ({filtering,setFiltering,spinner}) => {
  const products = useAppSelector(state => state.products)
  const [selected,setSelected] = useState<string>('')
  const [filteredPrice,setFilteredPrice] = useState<string>('')
  const [inputFiltered,setInputFiltered] = useState<string>('')

  useEffect(() => {
    if(selected !== '' && filteredPrice === 'low'){
      let selectz = products.filter((el) => el.category === selected && el.price <= 200)

      setFiltering(selectz)
    } else if(selected !== '' && filteredPrice === 'expensive'){
      let selectz = products.filter((el) => el.category === selected && el.price > 200)

      setFiltering(selectz)
    } else if(selected !== '' && filteredPrice === 'low' && inputFiltered !== ''){
      let selectz = products.filter((el) => el.category === selected && el.price <= 200 && el.title.toLowerCase().includes(inputFiltered))

      setFiltering(selectz)
    } else if(selected !== '' && filteredPrice === 'expensive' && inputFiltered !== ''){
      let selectz = products.filter((el) => el.category === selected && el.price > 200 && el.title.toLowerCase().includes(inputFiltered))

      setFiltering(selectz)
    } else if(selected !== ''){
      let selectz = products.filter(el => el.category === selected)

      setFiltering(selectz)
    } else if(filteredPrice === 'low') {
      let selectz = products.filter(el => el.price <= 200)

      setFiltering(selectz)
    } else if(filteredPrice === 'expensive') {
      let selectz = products.filter(el => el.price > 200)

      setFiltering(selectz)
    } else if(inputFiltered !== '') {
      let selectz = products.filter(el => el.title.toLowerCase().includes(inputFiltered))

      setFiltering(selectz)
    } else{
      setFiltering(products)
    }
  },[selected,products,setFiltering,filteredPrice,inputFiltered])

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value.toLowerCase())
  }

  const handlePrice = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setFilteredPrice(e.target.value)
  }

  const handleInputFilter = (e:React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value
    if(val.length > 3){
      setSelected('')
      setFilteredPrice('')
    }
    setInputFiltered(val.toLowerCase())
  }
  
  return (
    <Row >
      <FilterBy handleSelect={handleSelect} handlePrice={handlePrice} handleInputFilter={handleInputFilter}/>
          {spinner ?  <Spinner animation="border" className='m-auto mt-5' role="status"></Spinner> : ''}
            {filtering.map((el) => (
                <Col lg={4} md={6} sm={12} key={el.id} className='d-flex justify-content-center align-items-start mt-4'>    
                  <MyCard prod={el}  />
                </Col>
              ))
            }
    </Row>
  );
};

export default ListProduct;
