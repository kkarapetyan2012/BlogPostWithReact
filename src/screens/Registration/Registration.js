import React, { useState } from 'react';
// import Login from '../Login/Login';
import './Registration.css';
import Api from '../../api/Api'

const Registration = ({ setNavTab }) => {
    const [user, setUser] = useState({firstname: '',lastname: '', username: '', email: '', password: ''})

    const onInputeChange = (e) => {
        const { id, value } = e.target;
        setUser ({
            ...user,
            [id]: value
        })
    }

    const register = (user) => {
        if(user.firstname && user.lastname && user.username && user.email && user.password) {
            Api.people.registerUser(user)
            .then(response => {
                if (!response.ok) {
                    throw new Error();
                  }
                  else {
                    setNavTab('Login')
                  }
                  return response.json();
            }) 
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(function(err) {
                console.log("Error: ", err)
            });
            console.log(user)
        }
        
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="box-shadow login-form p-2 rounded">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="form-group">
                        <input onChange={onInputeChange} className="form-control" type="text" name="firstname" placeholder="First Name" id="firstname" />
                    </div>
                    <div className="form-group">
                        <input onChange={onInputeChange} className="form-control" type="text" name="lastname" placeholder="Last Name" id="lastname" />
                    </div>
                    <div className="form-group">
                        <input onChange={onInputeChange} className="form-control" type="text" name="username" placeholder="username" id="username" />
                    </div>
                    <div className="form-group">
                        <input onChange={onInputeChange} className="form-control" type="email" name="email" placeholder="email" id="email" />
                    </div>
                    <div className="form-group">
                        <input onChange={onInputeChange} className="form-control" type="password" name="password" placeholder="password" id="password" />
                    </div>
                    <div className="form-group">

                        <button onClick={register.bind(null, user)} type="submit" id="reg" className="box-shadow btn myBtn">Registration</button>
                        
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Registration;