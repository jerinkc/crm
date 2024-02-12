
import React, { useState, useEffect } from 'react';

import authApis from "../../apis/auth"
import { useNavigate, useLocation } from 'react-router-dom';

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const exitPath = localStorage.getItem('exitPath')

    const defaultLoggedInUrl = "/admin"

    useEffect(() => {
      if( localStorage.getItem('appToken') ) navigate(defaultLoggedInUrl);
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        const { login } = authApis
        const credentials = { email, password }

        login(credentials)
          .then((response) => {
            const { token } = response

            if( token ){
              localStorage.removeItem('exitPath')
              localStorage.setItem('appToken', token)
              console.log('stored', localStorage.getItem('appToken'))
              navigate(exitPath === '/login' ? defaultLoggedInUrl : exitPath)
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
