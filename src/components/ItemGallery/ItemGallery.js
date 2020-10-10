import React from "react";
import "./ItemGallery.scss";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";
import { fetchItems } from "../../redux/actions";
import Item from "../Item/Item";
import InfiniteScroll from 'react-infinite-scroller';

class ItemGallery extends React.Component {
    constructor(props) {
        super(props)
        this.buildFetchItems = this.buildFetchItems.bind(this)
    }

    componentDidMount() {
        this.props.fetchItems({ category: this.props.category, slug: this.props.slug })
    }

    buildFetchItems() {
        if (!this.props.items.isLoading) {
            this.props.fetchItems({
                category: this.props.category,
                slug: this.props.slug,
                appendItems: true,
                page: Math.max(1, this.props.items.response.data.nextPage) })
        }
    }

    render() {
        // https://www.npmjs.com/package/react-infinite-scroller
        return <InfiniteScroll
            loadMore={this.buildFetchItems}
            hasMore={this.props.items.response.data.hasMore}
            loader={<div key="spinner" className="spinner-loading"><BounceLoader color="#fa6266" /></div>}
            threshold={800}
            className="item-gallery-layout">
            {this.props.items.response.data.items.map((e) =>
                <Item key={e.sku} item={e} />
            )}
        </InfiniteScroll>
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
