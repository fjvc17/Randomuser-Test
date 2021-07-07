import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { UserProfile } from './UserProfile'
// import { Link } from 'react-router-dom'

export const UsersInfo = () => {
  return (

    
    <div className="container">
      <h1>users</h1>


      <div>
        <Switch>
          <Route exact path="/profile" component={ UserProfile }/>
        </Switch>
      </div>
      
    </div>
  )
}
