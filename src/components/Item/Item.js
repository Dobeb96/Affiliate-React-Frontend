import React from "react";
import "./Item.scss"
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'

class Item extends React.Component {
    render() {
        return <div className="card">
            <div className="card-image-wrapper">
                <img
                    className="card-image"
                    src={this.props.item.photos[0].url}
                    alt={this.props.item.name}
                />
            </div>
            <div className="card-content-hover">
                <div className="btn-primary btn-round-small btn-hover-darken flex-middle item-favourite" to="/">
                    <MdHeartOutline color="white" fontSize="1.5em" />
                </div>
            </div>
            <div className="item-header">
                <h3 className="item-name">{this.props.item.name}</h3>
                <div className="item-price">{this.props.item.price_current}zł</div>
            </div>
        </div>
    }
}

export default Item;
