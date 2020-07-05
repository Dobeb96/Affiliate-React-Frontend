import React from "react";
import "./ItemGallery.scss";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";
import { fetchItems } from "../../redux/actions";
import Item from "../Item/Item";

class ItemGallery extends React.Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        if (this.props.items.isLoading === true) {
            return <div className="spinner-loading">
                <BounceLoader color="#fa6266" />
            </div>
        } else {
            return <div className="item-gallery-layout">
                {this.props.items.items.data.map((e, i) =>
                    <Item key={i} item={e} />
                )}
            </div>
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
