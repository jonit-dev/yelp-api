import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import '../sass/style.scss';
import Header from "./pages/base/Header/Header";
import Footer from "./pages/base/Footer/Footer";

class App extends Component {

    state = {};

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Header/>
                    <Route path="/" exact component={Main}></Route>
                    <Footer/>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;