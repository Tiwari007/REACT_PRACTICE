import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import ShopRoutes from './ShopsRoutes';
import EmployeeInfo from './components/EmployeeInfo';
import CreateDataForm from './components/Form';

function AppRoute() {
    return (
        <React.Fragment>
            <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/Employee" className="nav-link">Emplyee Table</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shops" className="nav-link">SHOPS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/form" className="nav-link">Form</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path='/Employee' element={< EmployeeInfo />}></Route>
                    <Route exact path='/shops' element={< ShopRoutes />}></Route>
                    <Route exact path='/form' element={< CreateDataForm />}></Route>
                </Routes>
                </React.Fragment>

    )
}

export default AppRoute
