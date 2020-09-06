import React from "react";
import "./ItemGallery.scss";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";
import { fetchItems, fetchCategories } from "../../redux/actions";
import Item from "../Item/Item";

class ItemGallery extends React.Component {
    componentDidMount() {
        if (this.props.categorical) {
            this.props.fetchCategories().then(() => {
              this.props.fetchItems({ category: this.props.category, slug: 'hanging' })
            });
        } else {
            this.props.fetchItems({ category: this.props.category });
        }
    }

    render() {
        if ((this.props.categories && this.props.categories.isLoading === true) || this.props.items.isLoading === true) {
            return <div className="spinner-loading">
                <BounceLoader color="#fa6266" />
            </div>
        } else {
            return <div className="item-gallery-layout">
                {this.props.items.response.data.map((e, i) =>
                    <Item key={i} item={e} />
                )}
            </div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsReducer,
        categories: state.categoriesReducer,
    }
}

const mapDispatchToProps = () => {
    return {
        fetchItems,
        fetchCategories,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(ItemGallery);
