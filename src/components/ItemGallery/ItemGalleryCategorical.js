import React from "react";
import ItemGallery from "./ItemGallery.js"
import { connect } from "react-redux";
import { fetchItemCategories } from "../../redux/actions";

class ItemGalleryCategorical extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          category: 'ceiling' // default category to be loaded
        }
    }

    componentDidMount() {
        this.props.fetchItemCategories()
    }

    render() {
        let CategoryList = this.props.categories.isLoading ?
            <></> :
            <ul className="categories-selector">
                {this.props.categories.response.data.map((e, i) =>
                    <li key={e.slug}
                        className={"category " + (this.state.category === e.slug ? "active" : "")}
                        onClick={() => this.setState({category: e.slug })}>
                        {e.name}
                    </li>
                )}
            </ul>

        return <>
            {CategoryList}
            <ItemGallery key={"category" + this.state.category} category="categorical" slug={this.state.category} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoriesReducer,
    }
}

const mapDispatchToProps = () => {
    return {
        fetchItemCategories,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(ItemGalleryCategorical);
