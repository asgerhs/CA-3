import React from 'react';
//import Facade from './login/ApiFacade';

export default function Data() {
    return (
      <div className="container">
        <p><h3>Fetched data</h3></p>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            {/*{Facade.fetchData).then(data => <tr><td>Data.????</td><td>Data.????</td><td>Data.????</td><td>Data.????</td></tr>)} */}
          </tbody>
        </table>
      </div>
    )
  }