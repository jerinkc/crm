import React, { useState } from "react";

import { Interaction } from "./Interaction"
import { useTokenizedApiServiceContext } from "../../contexts/TokenizedApiServiceContextProvider"
import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext"

export default function ChatPanel() {
  const interactionsDummy = [
    {
      sender: {
        id: 1,
        full_name: 'Admin 1',
        type: 'Admin'
      },
      recipient: {
        id: 1,
        full_name: 'Customer'
      },
      content: 'content 1'
    }
  ]
  const [interactions, setInteractions] = useState([]);
  const [message, setMessage] = useState('')

  const { post } = useTokenizedApiServiceContext()
  const { currentCustomer }= useAdminDashboardContext()

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      interaction: {
        content: message,
        recipient_id: currentCustomer.id
      }
    }

    post('/interactions', data)
      .then(response => console.log(response))
  };

  return (
    <>
      <div className="row h-75 relative mt-3 w-100">
        <div className="col-12 col-md-12 h-100 w-100">
          <Interaction currentUser={ true }/>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12">
          <form className="form-inline d-flex" onSubmit={handleFormSubmit}>
            <input type="text"
              className="form-control mb-2 mr-sm-2"
              onChange={e => setMessage(e.target.value)}
              value = {message}
              placeholder="Message..."/>
            <button type="submit" className="btn btn-primary mb-2">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
