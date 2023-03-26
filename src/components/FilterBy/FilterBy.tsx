import React from 'react';
import Form from 'react-bootstrap/Form';
import styles from './Filter.module.css';
// import { BiSearch } from 'react-icons/bi';

const FilterBy: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftFiltered}>
        <Form.Group>
          <Form.Label style={{ marginBottom: '0' }}>
            <h4>Filter By : </h4>
          </Form.Label>
        </Form.Group>

        <Form.Group>
          <Form.Select>
            <option value=''>Category</option>
            <option value='Electronics'>Electronics</option>
            <option value={`Women's Clothing`}>Women's Clothing</option>
            <option value={`Men's Clothing`}>Men's Clothing</option>
            <option value='Jewelery'>Jewelery</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Select>
            <option value=''>Price</option>
            <option value='low'>Low Cost</option>
            <option value='expensive'>High Cost</option>
          </Form.Select>
        </Form.Group>
      </div>
    </div>
  );
};

export default FilterBy;
