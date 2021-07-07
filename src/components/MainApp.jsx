import React, { useEffect, useState } from 'react';
// import { Menu } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { UsersInfo } from './UsersInfo';
import { Navbar } from './Navbar';



export const MainApp = () => {

  const [data, setData] = useState(null);
  // const [current, setCurrent] = useState('mail');

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(`https://randomuser.me/api/?results=50`)
      setData(data)
    }
    getData();

  }, []);
  console.log(data);

  // const handleClick = (e) => {
  //   console.log('click ', e);
  //   setCurrent(e.key);
  // };



  return (
    <div>

      {/* <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ backgroundColor: 'black' }}>
        <Menu.Item key="mail" icon={<UserOutlined />}>
          People User
        </Menu.Item>
      </Menu> */}

      <Navbar />

      <Router>
        <Link className="container" to="/"> Home</Link>

        {/* <Link className="container" to="/users">UserInfo</Link> */}
       
        <div className="row row-cols-6 row-cols-md-6 g-3">
          {
            data ? data.results.map(data => (
              <div className="col">
                <div className="card">
                  <img src={data.picture.large} key={data.id.value} className="card-img-top" alt="thumbnail"></img>
                  <div className="card-body">
                  <h5 className="card-title">User</h5>
                </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name: { data.name.first }</li>
                    <li className="list-group-item">City: { data.location.city }</li>
                    <li className="list-group-item">Country: { data.location.country }</li>
                  </ul>
                  <div className="card-body">
                    <Link to="/users" className="card-link">More Info</Link>
                  </div>
                </div>
              </div>
            )) : null
          }
        </div>

        <Switch>
          <Route exact path="/users" component={UsersInfo} />
        </Switch>

      </Router>




    </div>


  )
}
