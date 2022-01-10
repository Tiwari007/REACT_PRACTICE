import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import BodyShop from './components/SHOPS/BodyShop';

import MenOutwear from './components/SHOPS/MenOutwear';
import MenTshirt from './components/SHOPS/MenTshirt';
import WomenOutwear from './components/SHOPS/WomenOutwear';
import WomentTshirt from './components/SHOPS/WomentTshirt';

function ShopRoutes() {
    return (
        <React.Fragment>
                
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

            
        </React.Fragment>
    )
}

export default ShopRoutes
