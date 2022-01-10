import React, { Component } from 'react'
import { PageHeader } from 'antd';
import "./Header.css";
import BodyShop from './BodyShop';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import MenOutwear from './MenOutwear';
import MenTshirt from './MenTshirt';
import WomenOutwear from './WomenOutwear';
import WomentTshirt from './WomentTshirt';


export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader
                    className="site-page-header"
                    // onBack={() => null}
                    // title="SHOP"
                     >SHOP</PageHeader>

                <Router>
                
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list/mens_outerwear" className="nav-link">Men's Outwear</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list/ladies_outerwear" className="nav-link">Ladies Outwear</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list/mens_tshirt" className="nav-link">Men's T-Shirt</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list/ladies_tshirt" className="nav-link">Ladies T-Shirt</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path='/' element={< BodyShop />}></Route>
                    <Route exact path='/list/mens_outerwear' element={< MenOutwear item="16" />}></Route>
                    <Route exact path='/list/ladies_outerwear' element={< WomenOutwear />}></Route>
                    <Route exact path='/list/mens_tshirt' element={< MenTshirt />}></Route>
                    <Route exact path='/list/ladies_tshirt' element={< WomentTshirt />}></Route>
                </Routes>

                </Router>




            </React.Fragment>
        )
    }
}

export default Header
