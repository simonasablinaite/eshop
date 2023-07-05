import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const EditProduct = () => {

   const [edit, setEdit] = useState(false);



   return (
      <div>
         {edit ? (
            <NavLink to='/editing-form'>Edit</NavLink>
         ) : (
            <button onClick={() => setEdit(true)}>Edit</button>
         )}
      </div>
   )
}

export default EditProduct
