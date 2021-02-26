import { Component } from 'react';
import { connect } from 'react-redux';
// Categories Api
import { categoriesApi } from 'api/api';
// AC
import { setCategories } from 'redux/categories-reducer';

class CategoriesList extends Component {
  componentDidMount() {
    categoriesApi
      .getCategories()
      .then(response => this.props.setCategories(response.data));
  }
  render() {
    return (
      <div className="row">
        {this.props.categories.map(category => (
          <div key={category.id} className="col-12 mb-2">
            <div className="card">
              <h5 className="card-header">ID: {category.id}</h5>
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.slug}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCategories
};

export default connect(null, mapDispatchToProps)(CategoriesList);
