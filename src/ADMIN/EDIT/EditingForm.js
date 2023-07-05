import React from 'react'
import { Link } from 'react-router-dom';


const EditingForm = () => {
   return (
      <form>
         <label htmlFor="edit-title">Edit title:</label>
         <input type="text" id='edit-title' name='edit-title' /> <br />

         <Link to='/admin'>Go back to Admin page</Link>
      </form>
   )
}

export default EditingForm
