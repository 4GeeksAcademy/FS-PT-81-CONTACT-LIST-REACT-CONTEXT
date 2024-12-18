import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const ContactCard = (props) =>{

    const{store, actions} = useContext(Context)

    const navigate= useNavigate();

    const handleDelete = () => 
        actions.deleteContact(props.contactId)

    const handleEdit = ()=>{
        actions.selectContact(store.contacts.filter(el => el.id === props.contactId)[0])
        navigate('/edit/'+props.contactId)[0]}
    

    return (

        <div className="card">
            <div className="d-flex">
                <img width ={'80px'}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGhXTEp-G9Z1SBNez2KK6gAeeIbMfRgz-FQ&s" alt="perfil.pic" />
                <div>
                    <p>name:{props.name}</p>
                    <p></p>phone:{props.phone}
                    <p></p>email:{props.email}
                    <p></p>address{props.address}
                    <button className="btn btn-danger" onClick={handleDelete}>delete</button>
                    <button className="btn btn-warning" onClick={handleEdit}>Edit</button>
                </div>
            </div>
        </div>
    )
}