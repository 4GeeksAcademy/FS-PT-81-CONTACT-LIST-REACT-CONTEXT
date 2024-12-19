import React, {useContext, useState} from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";



export const NewContactForm =()=>{
    const {store, actions} = useContext(Context);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name :'',
        phone:'',
        email:'',
        address:''
        

    })

    const handleChange = e => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})

    }

    const handleCancel = () => {
        navigate('/')
    }

   
    

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/');
        actions.createContact(formData)
    }

    

return(
    <div className= "container">
   <div className="Title">
    <h1 className="text-center">
        Add a new contact
    </h1>
   </div>
    <form className=" container card form-control" style={{border:"0px"}} onSubmit={handleSubmit}>
        <p className="mb-1">Full name</p>
        <input type="text" className="form-control mb-3" value={ formData.name } onChange={handleChange} name="name" placeholder="name" required />
        <p className="mb-1">Email</p>
        <input type="text" className="form-control mb-3" value={ formData.email } onChange={handleChange} name="email" placeholder="phone" required />
        <p className="mb-1">Phone</p>
          <input type="text" className="form-control mb-3" value={ formData.phone } onChange={handleChange} name="phone" placeholder="email" required />
          <p className="mb-1">Adress</p>
          <input type="text" className="form-control mb-3" value={ formData.address } onChange={handleChange} name="address" placeholder="address" required />
        <input className="btn btn-primary" type="submit" value="save"  />

        <nav className="name">
  <button className="" style={{ border: "0px", background: "white" }}>
        <a className="nav-link-underline-primary" onClick={handleCancel}>
         Or get back to contacts
         </a>
         </button>
        </nav>
         </form>
    </div>
)
}