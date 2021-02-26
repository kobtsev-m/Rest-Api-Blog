import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CategoriesList from './CategoriesList/CategoriesList';

function mapStateToProps(state) {
  return state.categoriesData;
}

class Posts extends Component {
  render() {
    return (
      <>
        <div className="row">
          <span className="h2 mb-1">Categories</span>
        </div>
        <hr className="row my-3" />
        <Route
          exact
          path="/categories"
          render={() => <CategoriesList categories={this.props.categories} />}
        />
      </>
    );
  }
}

export default connect(mapStateToProps)(Posts);
