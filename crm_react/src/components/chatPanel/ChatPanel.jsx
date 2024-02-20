import React, { useEffect, useState } from "react";

import { Interaction } from "./Interaction"
import { useTokenizedApiServiceContext } from "../../contexts/TokenizedApiServiceContextProvider"
import { useAdminDashboardContext } from "../../contexts/AdminDashboardContext"
import { useAuthContextProvider } from "../../contexts/AuthContextProvider";

export default function ChatPanel() {
  const [interactions, setInteractions] = useState([]);
  const [message, setMessage] = useState('')

  const { post, get } = useTokenizedApiServiceContext()
  const { authUserInfo } = useAuthContextProvider()
  const { currentCustomer }= useAdminDashboardContext()

  const { id } = authUserInfo

  useEffect(() => {
    get('/interactions')
      .then(response => {
        setInteractions(response.data)
      })
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      interaction: {
        content: message,
        recipient_id: currentCustomer.id
      }
    }

    post('/interactions', data)
      .then(response => {
        const { interaction } = response.data
        setInteractions([...interactions, interaction])
        setMessage('')
      })
  };

  return (
    <>
      <div className="row h-75 relative mt-3 w-100">
        <div className="col-12 col-md-12 h-100 w-100 overflow-scroll">
          {
            interactions.map((interaction, index) => {
              return (
                <Interaction
                  key={index}
                  currentUser={ interaction.sender.id === id } //currentAdmin.id
                  content={interaction.content}
                />
              )
            })
          }
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
