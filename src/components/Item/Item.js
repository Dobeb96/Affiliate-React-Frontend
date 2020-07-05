import React from "react";
import "./Item.scss"

class Item extends React.Component {
    render() {
        return <div className="card">
            <img 
                className="card-image" 
                src={this.props.item.url} 
                alt={this.props.item.name}
            />
        </div>
    }
}

export default Item;
