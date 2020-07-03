import React from "react";
import "./ItemGallery.scss";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";
import { fetchItems } from "../../redux/actions";

class ItemGallery extends React.Component {
    render() {
        return (
            <div className="spinner-loading">
                <h1 onClick={() => this.props.fetchItems()}>{this.props.items}</h1>
                <BounceLoader color="#fa6266" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsReducer,
    }
}

const mapDispatchToProps = () => {
    return {
        fetchItems,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(ItemGallery);
