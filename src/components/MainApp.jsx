import React, { useEffect, useState } from 'react';
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { FetchApi } from './FetchApi';
import { Navbar } from './Navbar';
import { UsersInfo } from './UsersInfo';



export const MainApp = () => {

  const [data, setData] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(`https://randomuser.me/api/?results=50`)
      setData(data)
    }
    getData();

  }, []);
  console.log(data);

  return (

    <div>
      <Router>
        
        <Navbar />
        {/* <hr /> */}

        <div className="container">
          <Switch>
            <Route exact path="/users" render={() => <UsersInfo currentUser={currentUser} />} />
            <Route path="/" render={() => <FetchApi selectUser={setCurrentUser} data={data} />} />
          </Switch>
        </div>

      </Router>

    </div>

    

  )
}
