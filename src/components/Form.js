import React from 'react';
import { useForm } from '../hooks/useForm';
import './Form.css'

const Form = ({agregar}) => { 
  const initialState = {
    title: '',
    description: '',
    image: '',
    price: '',
    category: ''
  }

  const [formValues, handleInputChange, reset] = useForm(initialState);

  const {title, description, price, image,category} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title,
                    price,
                    description,
                    image,
                    category,
                }
            )
        })
            .then(res => res.json())
            .then(json => agregar((prev) => [{                                    
              title,
              price: +price,
              description,
              image,
              category,
            }, ...prev]
            ))           
            .catch(err => console.log(err))
            reset(),
            window.scrollBy(-10000, -10000)
  }
  
  return (
    <div id="form" className="form-container">
      <h3 className="form-title">Agregar Producto</h3>     
        <form action="#" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" name="title" onChange={handleInputChange} value={title} />
          </div>
          <div className="form-control">
            <label htmlFor="description">Description</label>
            <textarea rows="5" name="description" onChange={handleInputChange} value={description}></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="price">Price</label>
            <input pattern="/^\d*(\.\d{0,2})?$/" title="Only Numbers" type="number" min="0" max="9999" name="price" step="0.1" onChange={handleInputChange} value={price} />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <input type="text" name="category" onChange={handleInputChange} value={category} />
          </div>
          <div className="form-control">
            <label htmlFor="image">Image URL</label>
            <input type="text" name="image" onChange={handleInputChange} value={image} />
          </div>
          <button className="form-submit">Add new product</button>
        </form>   
    </div>
  )
}

export default Form
