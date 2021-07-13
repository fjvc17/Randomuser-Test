import React, { useState } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ backgroundColor: 'black' }}>
        <Menu.Item key="mail" icon={<UserOutlined />}>
          People User
        </Menu.Item>
        <Link to="/"> Home</Link>
      </Menu>
      
    </div>
  )
}
