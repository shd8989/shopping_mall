import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import axios from 'axios';
import Header from './common/Header';
import Page1 from './Page1';
import Page2 from './Page2';

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
            <Routes>
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>
          </div>
        );
    }
}

export default App;