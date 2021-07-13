import { Layout, List } from 'antd';
import React from 'react';
import { Redirect } from 'react-router-dom';
import './userInfo.css';
import { UserOutlined } from '@ant-design/icons';


const { Content } = Layout;




export const UsersInfo = ({ currentUser }) => {

  

  return (
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 560, margin: 50 }}>
          <div className="card-column">
            {     
              Object.keys(currentUser).length ? 
              <>
                <div className="img-picture">
                  <img className="img-photo" src={ currentUser.picture.large } alt="user"></img>

                </div>
                <div className="user-info">

                  <List 
                    size="large"
                    header={<div className="ant-list-header"><UserOutlined /></div>}
                    bordered
                    dataSource={[
                      `Name: ${ currentUser.name.first } ${ currentUser.name.last }`,
                      `Username: ${ currentUser.login.username }`,
                      `Age: ${ currentUser.dob.age }`,
                      `Email: ${ currentUser.email }`,
                      `Phone: ${ currentUser.phone }`,
                    ]}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    style={{backgroundColor: 'white'}}
                  />
  
                </div>
                
              </>
              :  <p className="message">No User Found Get back to the Homepage</p>

                
              
            } 
            <Redirect to="/users" />
          
          </div>  
          
        </div>
        
      </Content>

    </Layout>

  )

}
