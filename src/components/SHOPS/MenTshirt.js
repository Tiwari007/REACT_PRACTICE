import React, { Component } from 'react'
import CartIconMT from './images/mens_tshirts.jpg'

export class MenTshirt extends Component {
    render() {
        return (
            <React.Fragment>
               <div>
                    <img src={CartIconMT} />
                </div>
                <h3>Men's T-Shirts</h3>
                <p>{}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src={'./images/MO1.jpg'}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-4">
                            <img src={'./images/MO1.jpg'}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-4">
                            <img src={'./images/MO1.jpg'}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-4">
                            <img src={'./images/MO1.jpg'}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-4">
                            <img src={'./images/MO1.jpg'}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-4">
                            <img src={'./images/MO1.jpg'}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MenTshirt
