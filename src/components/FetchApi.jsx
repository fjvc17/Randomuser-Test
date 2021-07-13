import React from 'react';
import { Link } from 'react-router-dom';

export const FetchApi = ({data, selectUser}) => {

 
  return (
    <>

      <div className="row row-cols-6 row-cols-md-6 g-3">
        {
          data ? data.results.map((user, i) => (
            <div key={i} className="col">
              <div className="card">
                <img src={user.picture.large} key={user.id.value} className="card-img-top" alt="thumbnail"></img>
                <div className="card-body">
                <h5 className="card-title">User</h5>
              </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name: { user.name.first }</li>
                  <li className="list-group-item">City: { user.location.city }</li>
                  <li className="list-group-item">Country: { user.location.country }</li>
                </ul>
                <div className="card-body">
                  <Link onClick={() => selectUser(user)} to="/users" className="card-link">More Info</Link>
                </div>
              </div>
            </div>
          )) : null
        }
      </div>

    </>
  )
}
