import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import axios from 'axios';
import Header from './common/Header';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

/*
   const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/v1')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);
*/

/*
    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
    */

    render() {
        return (
          <div className="App">
            <Header />
            </div>
        );
    }
}

export default App;