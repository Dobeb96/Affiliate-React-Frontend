import React from "react";
import "./ItemGallery.scss";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";
import { fetchItems } from "../../redux/actions";

class ItemGallery extends React.Component {
    componentDidMount() {
        this.props.fetchItems()
    }

    render() {
        if (Object.keys(this.props.items).length === 0) {
            return <div className="spinner-loading">
                <BounceLoader color="#fa6266" />
            </div>
        } else {
            return <h1>TODO: Render items here</h1>
        }
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
