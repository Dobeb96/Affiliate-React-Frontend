import React from "react";
import "./ItemGallery.scss";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";
import { fetchItems, fetchCategoriesAndItems } from "../../redux/actions";
import Item from "../Item/Item";
import InfiniteScroll from 'react-infinite-scroller';

class ItemGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { slug: 'ceiling' }
    }

    componentDidMount() {
        if (this.hasCategories()) {
            this.props.fetchCategoriesAndItems({ slug: this.state.slug} )
        } else {
          this.props.fetchItems({ category: this.props.category })
        }

        this.isLoading = this.isLoading.bind(this)
        this.hasCategories = this.hasCategories.bind(this)
        this.isCategoriesLoading = this.isCategoriesLoading.bind(this)
        this.renderCategoryList = this.renderCategoryList.bind(this)
        this.fetchItems = this.fetchItems.bind(this)
    }

    isLoading() {
        return this.props.items.isLoading === true ||
          (this.hasCategories() && this.isCategoriesLoading())
    }

    hasCategories() {
      return this.props.categorical
    }

    isCategoriesLoading() {
      return this.props.categories && this.props.categories.isLoading === true
    }

    fetchItems(slug) {
        this.setState({slug: slug}, () => {
            this.props.fetchItems({ category: 'categories', slug: slug })
        })
    }

    renderCategoryList() {
        let CategoryList = <></>;
        if (this.hasCategories() && !this.isCategoriesLoading()) {
            CategoryList = <ul class="categories-selector">
                {this.props.categories.response.data.map((e, i) =>
                    <li className={"category " + (this.state.slug === e.slug ? "active" : "")}
                        onClick={() => this.fetchItems(e.slug)}>
                        {e.name}
                    </li>
                )}
            </ul>
        }
        return CategoryList
    }



    render() {
        let Content, CategoryList;

        if (this.hasCategories() && !this.isCategoriesLoading()) {
            CategoryList = this.renderCategoryList()
        }

        if (this.isLoading()) {
            Content = <div className="spinner-loading">
                <BounceLoader color="#fa6266" />
            </div>
        } else {
            Content = <InfiniteScroll
                pageStart={0}
                loadMore={() => this.props.fetchItems({ category: this.props.category })}
                hasMore={true}
                loader={<BounceLoader color="#fa6266" />}
                className="item-gallery-layout">
                {this.props.items.response.data.map((e, i) =>
                    <Item key={i} item={e} />
                )}
            </InfiniteScroll>
        }

        return <>
            {CategoryList}
            {Content}
        </>
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
        fetchCategoriesAndItems,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(ItemGallery);
