import React, { useState, useEffect } from 'react';
import './Login.css';
import Api from '../../api/Api';
import Service from '../../service/service';
import Spinner from '../../components/Spinner/Spinner'


function Login (props) {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(true);
  
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value })
  }

  useEffect(() => {
    setLoading(false);
  })

  const onSubmitFunction = (e) => {
    e.preventDefault();
    if(loginInfo.email && loginInfo.password) {
      Api.people.postLogin(loginInfo)
        .then(res => {
          return res.json()
        })
        .then(data => {
          Service.set("user", data.userId);
          Service.set("token", data.id);
          props.setNavTab("Workspace");
        })
        .catch(() => {
          console.log("WRONG");
        })
    }
    else {
      console.log("EMPTY");
    }
  }

  return (
    <>
      {
        loading ? <Spinner /> :
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-itam-center">
            <div className="row">
              <form className="col-12 d-flex justify-content-center align-itam-center flex-column box-shadow p-2">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input onChange={onHandleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input onChange={onHandleChange} name="password" type="password" className="form-control" id="exampleInputPassword1"  placeholder="Write your password"/>
                </div>
                  <button onClick={onSubmitFunction} type="submit" className="btn myBtn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Login;
