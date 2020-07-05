import React from "react";
import "./Item.scss"
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'
import MdTrendingUp from 'react-ionicons/lib/MdTrendingUp'

class Item extends React.Component {
    render() {
        return <div className="card">
            <img 
                className="card-image" 
                src={this.props.item.url} 
                alt={this.props.item.name}
            />
            <div className="btn-primary btn-round-small btn-hover-darken flex-middle item-favourite" to="/">
                <MdHeartOutline color="white" fontSize="1.5em" />
            </div>
            <div className="btn-primary-small btn-hover-darken item-vendor-url" to="/">
                <div className="item-favourite-icon">
                    <MdTrendingUp color="white" fontSize="1.5em" />
                </div>
                <div>vendor.url</div>
            </div>
        </div>
    }
}

export default Item;
