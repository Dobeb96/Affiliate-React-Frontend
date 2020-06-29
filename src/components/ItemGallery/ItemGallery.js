import React from "react";
import "./ItemGallery.scss"
import BounceLoader from "react-spinners/BounceLoader"

class ItemGallery extends React.Component {
    render() {
        return (
            <div className="spinner-loading">
                <BounceLoader color="#fa6266" />
            </div>
        )
    }
}

export default ItemGallery;
