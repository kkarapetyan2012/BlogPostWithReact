import React, { useState } from 'react';
import Home from './screens/Home/Home';
import Nav from './screens/Nav/Nav';
import Login from './screens/Login/Login';
import Registration from './screens/Registration/Registration';
import Workspace from './screens/Workspace/Workspace';
import Service from './service/service';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tab, setTab] = useState(Service.get("token") ? "Workspace" : "Home" );

  function setNavTab(tab) {
    setTab(tab)
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-0">
            
            <Nav tab={tab} setNavTab={setNavTab}/>
            <div className="container">
              {tab === "Home" && <Home /> }
              {tab === "Login" && <Login setNavTab={setNavTab}/>}
              {tab === "Registration" && <Registration setNavTab={setNavTab} />}
              {tab === "Workspace" && <Workspace />}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );  
}

export default App;