import React, { useState, useEffect } from 'react';
import './style/App.css';
import facade from './ApiFacade'

export default function LoggedIn() {
    const [dataFromServer, setDataFromServer] = useState("Fetching!!");

    useEffect(() => {
        facade.fetchData().then(res => setDataFromServer(res.msg)).catch(e => console.log(e));
    }, [])

    return (
        <div>
          <h2>Data Received from server</h2>
          <h3>{dataFromServer}</h3>
        </div>
      )   
}