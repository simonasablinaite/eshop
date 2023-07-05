import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'

const CreateProduct = () => {

   const [species, setSpecies] = useState([]);
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [price, setPrice] = useState('');
   const [photo, setPhoto] = useState('');

   useEffect(() => {
      axios.get(`${API_URL}/species`)
         .then(res => (
            setSpecies(res.data)),
         )


   }, [description, photo, price, title])

   const newProductHandler = (event) => {
      event.preventDefault();

      axios.post(`${API_URL}/products`, {

         photoURL: photo,
         title,
         body: description,
         price
      })
   }

   const photoHandler = event => setPhoto(event.target.value);
   const titleHandler = event => setTitle(event.target.value);
   const descriptionHandler = event => setDescription(event.target.value);
   const priceHandler = event => setPrice(event.target.value);
   const speciesHandler = event => setSpecies(event.target.value);

   return (
      <form onSubmit={newProductHandler} defaultValue>
         <h3>Create new Element:</h3>
         <div className='form-control'>
            <label htmlFor="">Product photo URL:</label>
            <input id="image"
               type="text"
               value={photo}
               onChange={photoHandler}
            />
         </div>

         <div className='form-control'>
            <label htmlFor="">Product title:</label>
            <input type="text" value={title} onChange={titleHandler} />
         </div>

         <div className='form-control'>
            <label htmlFor="">Product description:</label>
            <textarea name="" id="" cols="30" rows="10" value={description} onChange={descriptionHandler}>Description about product</textarea>
         </div>

         <div className='form-control'>
            <label htmlFor="">Price</label>
            <input type="number" vlaue={`&euro; ${price}`} onChange={priceHandler} />
         </div>

         <div className='form-control'>
            <label htmlFor="">Select species:</label>
            <select name="species" id="species" value={false} onChange={speciesHandler}>Select species"
               {species.map(specie => (
                  <option key={specie.id} value={specie.id}>{specie.title}</option>
               ))}
            </select>

         </div>

         <button className='btn create-add' type='submit'>Create</button>
      </form>
   )
}

export default CreateProduct
