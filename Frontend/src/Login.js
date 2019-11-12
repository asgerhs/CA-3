import React, { useState} from 'react';
import './style/App.css';

export default function Login(props) {
    const [state, setState] = useState();

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.login(state.username, state.password);
    }

    const onChange = (evt) => {
        setState({ ...state, [evt.target.id]: evt.target.value });
    }

    return (
        <form onSubmit={onSubmit} onChange={onChange}>
            <input type="text" placeholder="username" id="username" />
            <input type="text" placeholder="password" id="password" />
            <input type="submit" value="Login" />
        </form>
    )
}