
import React, { useState } from 'react';

import authApis from "../../apis/auth"

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const { login } = authApis
        const credentials = { email, password }

        login(credentials)
          .then((response) => {
            const { token } = response

            if( token ){
              const exitUrl = localStorage.getItem('exitUrl')
              localStorage.removeItem('exitUrl')
              localStorage.setItem('appToken', token)
              window.location.href= exitUrl || '/admin/customers'
            }else{
              setError(response.message)
            }
          })
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Login</h4>
                          {
                            error ? <p className='text-danger'>{error}</p> : null
                          }
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
