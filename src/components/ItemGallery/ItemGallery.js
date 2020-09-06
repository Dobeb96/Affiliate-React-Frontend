import React from "react";
import "./ItemGallery.scss";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";
import { fetchItems, fetchCategories } from "../../redux/actions";
import Item from "../Item/Item";

class ItemGallery extends React.Component {
    componentDidMount() {
        if (this.hasCategories()) {
            this.props.fetchCategories().then(() => {
              this.props.fetchItems({ category: this.props.category, slug: 'hanging' })
            });
        } else { this.props.fetchItems({ category: this.props.category }); }

        this.isLoading = this.isLoading.bind(this)
        this.hasCategories = this.hasCategories.bind(this)
        this.isCategoriesLoading = this.isCategoriesLoading.bind(this)
        this.renderCategoryList = this.renderCategoryList.bind(this)
    }

    isLoading() {
        return this.props.items.isLoading === true || this.isCategoriesLoading()
    }

    hasCategories() {
      return this.props.categorical
    }

    isCategoriesLoading() {
      return this.props.categories && this.props.categories.isLoading === true
    }

    renderCategoryList() {
        let CategoryList = <></>;
        if (this.hasCategories() && !this.isCategoriesLoading()) {
            CategoryList = <ul class="categories-selector">
                {this.props.categories.response.data.map((e, i) =>
                    <li class="category">{e.name}</li>
                )}
            </ul>
        }
        return CategoryList
    }

    render() {
        if (this.isLoading()) {
            return <div className="spinner-loading">
                <BounceLoader color="#fa6266" />
            </div>
        } else {
            return <>
                {this.renderCategoryList()}
                <div className="item-gallery-layout">
                    {this.props.items.response.data.map((e, i) =>
                        <Item key={i} item={e} />
                    )}
                </div>
            </>
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
