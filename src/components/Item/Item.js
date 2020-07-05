import React from "react";
import "./Item.scss"
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'

class Item extends React.Component {
    render() {
        return <div className="card">
            <img 
                className="card-image" 
                src={this.props.item.url} 
                alt={this.props.item.name}
            />
            <div className="btn-primary btn-round-small flex-middle item-favourite" to="/">
                <MdHeartOutline color="white" fontSize="1.5em" />
            </div>
        </div>
    }
}

export default Item;
