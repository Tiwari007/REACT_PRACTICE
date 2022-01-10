import React, { Component } from 'react'
import CartIconMO from './images/mens_outerwear.jpg'


export class MenOutwear extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <img src={CartIconMO} />
                </div>
                <h6 className="pt-4 pb-2">Men's Outerwear</h6>
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

export default MenOutwear


