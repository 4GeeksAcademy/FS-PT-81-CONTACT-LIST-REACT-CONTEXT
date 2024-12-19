import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Delete } from "./delete.jsx";

export const ContactCard = (props) =>{

    const{store, actions} = useContext(Context)

    const navigate= useNavigate();

    const handleDelete = () => 
        actions.deleteContact(props.contactId)

    const handleEdit = ()=>{
        actions.selectContact(store.contacts.filter(el => el.id === props.contactId)[0])
        navigate('/edit/'+props.contactId)[0]}
    

    return (

        <div className=" container" style={{border:"1px solid lightgray"}}>
            <div className="">
            <div className="d-flex py-2">
                <img className="my-3"width ={'80px'}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGhXTEp-G9Z1SBNez2KK6gAeeIbMfRgz-FQ&s" alt="perfil.pic" />
                <div className= "d-flex flex-column align-items-start text-muted mx-3">
                    <h6>{props.name}</h6>
                    <p ><i className="fa-solid fa-location-dot mx-2" style={{color: "gray"}}></i>{props.address}"</p>
                    <p><i className="fa-solid fa-phone-flip " style={{color:"gray", marginRight:"15px"}}></i>{props.phone}</p>
                    <p> <i className="fa-solid fa-envelope mx-2" style={{color:"gray"}}/>{props.email}</p>
                    
                </div>
                <div className="icons-pencil" style={{marginLeft:"auto", gap: "20px" }}>
                <i className="fa-solid fa-pencil-alt me-3" style={{ cursor: "pointer" }} onClick={handleEdit} ></i>
                
                <i className="fa-solid fa-trash style" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ cursor: "pointer" }}>
                    </i>  <Delete contactId={props.contactId} />
                
                </div>
            </div>
            </div>
        </div>
    )
}