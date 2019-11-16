import React from 'react';
import Facade from './login/ApiFacade';

export default function Data() {
  
    return (
      <div className="container">
        <h3>Fetched data</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Height</th>
              <th scope="col">Gender</th>
              <th scope="col">url</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{123}</td></tr>
            {Facade.fetchData().then(data => data.map(p => console.log(p.name)))}
            {/*<tr><td>{person.name}</td><td>{person.name}</td><td>{person.name}</td><td>{person.name}</td></tr> */}
          </tbody>
        </table>
      </div>
    )
  }