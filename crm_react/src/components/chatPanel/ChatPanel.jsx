import React, { useState } from "react";

export default function ChatPanel() {
  const [interactions, setInteractions] = useState([]);
  const [componsedMessage, setComponsedMessage] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="row h-75 relative mt-3">
        <div className="col-12 col-md-12 h-100">
          Interactions
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12">
          <form onSubmit={handleFormSubmit}>
            <div className="w-100 h-100">
                <textarea className="w-100 h-75"
                  onChange={(e) => setComponsedMessage(e.target.value)}
                  value ={ componsedMessage }></textarea>
                <br />
                <input type="submit" value="Send" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
