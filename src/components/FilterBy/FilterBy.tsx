import React from 'react';
import Form from 'react-bootstrap/Form';
import  './Filter.css';
import { BiSearch } from 'react-icons/bi';

type PropsTypes = {
  handleSelect : (e:React.ChangeEvent<HTMLSelectElement>) => void
  handlePrice : (e:React.ChangeEvent<HTMLSelectElement>) => void
  handleInputFilter : (e:React.ChangeEvent<HTMLInputElement>) => void
}

const FilterBy: React.FC<PropsTypes> = ({handleSelect,handlePrice,handleInputFilter}) => {
  return (
    <div className='contain'>
      <div className='leftFiltered'>
          <Form.Select onChange={handleSelect} >
            <option value=''>Category</option>
            <option value='Electronics'>Electronics</option>
            <option value={`Women's Clothing`}>Women's Clothing</option>
            <option value={`Men's Clothing`}>Men's Clothing</option>
            <option value='Jewelery'>Jewelery</option>
          </Form.Select>
          <Form.Select onChange={handlePrice} >
            <option value=''>Price</option>
            <option value='low'>Low Cost</option>
            <option value='expensive'>High Cost</option>
          </Form.Select>
      </div>
      <div className='rightFiltered'>
        <Form.Group id='search'>
            <Form.Control placeholder='Product Name' className='inputProduct' onChange={handleInputFilter}/>
            <BiSearch className='icon'/>
        </Form.Group>
      </div>
    </div>
  );
};

export default FilterBy;
