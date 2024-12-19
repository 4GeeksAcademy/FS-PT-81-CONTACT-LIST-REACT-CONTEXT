import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Delete = props =>{

    const {store, actions} = useContext(Context)
    const handleDelete = () => 
        actions.deleteContact(props.contactId)

    return(
<div className="modal fade" id="exampleModal"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h6 className="modal-title" id="exampleModalLabel">Are you sure?</h6>
        <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
      </div>
      <div className="modal-body">
     If you deleting this thing the entire world will go down
      </div>
      <div className="modal-footer">
        <button className="btn btn-secondary" onClick={handleDelete} data-bs-dismiss="modal">
       <a onClick={handleDelete} >Yes baby! </a></button>
        <button type="button" className="btn btn-primary">Oh no!</button>
      </div>
    </div>
  </div>
</div>

    )
}
