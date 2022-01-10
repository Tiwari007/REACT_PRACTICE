import React, { Component } from 'react'
import CartIconMO from './images/mens_outerwear.jpg';
import CartIconMT from './images/mens_tshirts.jpg';
import CartIconWO from './images/ladies_outerwear.jpg';
import CartIconWT from './images/ladies_tshirts.jpg';

export class BodyShop extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={CartIconMO} />
                </div>
                <h3>Men's Outerwear</h3>
                <button type="button" className="btn btn-outline-secondary">SHOP NOW</button>


                <div>
                    <img src={CartIconMT} />
                </div>
                <h3>Men's T-Shirts</h3>
                <button type="button" className="btn btn-outline-secondary">SHOP NOW</button>


                <div>
                    <img src={CartIconWO} />
                </div>
                <h3>Women's Outerwear</h3>
                <button type="button" className="btn btn-outline-secondary">SHOP NOW</button>


                <div>
                    <img src={CartIconWT} className="col-12"/>
                </div>
                <h3>Women's T-Shirt</h3>
                <button type="button" className="btn btn-outline-secondary">SHOP NOW</button>
            </div>
        )
    }
}

export default BodyShop
