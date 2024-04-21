import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import axios from 'axios';
import Header from './common/Header';
import Footer from './common/Footer';
import Page1 from './Page1';
import Page2 from './Page2';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render() {
        return (
          <div className="App">
            <Header />
            <Routes>
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>
            <Footer />
          </div>
        );
    }
}

export default App;