import { Component } from 'react';
import { connect } from 'react-redux';
// Categories Api
import { categoriesApi } from 'api/api';
// AC
import { setCategories } from 'redux/categories-reducer';
import { SpinnerWithText } from 'components/common/loaders/Loaders';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  componentDidMount() {
    this.setState({ loading: true });
    categoriesApi.getCategories().then((response) => {
      this.props.setCategories(response.data);
      this.setState({ loading: false });
    });
  }
  render() {
    return (
      <div className="row">
        {!this.state.loading ? (
          this.props.categories.map((category) => (
            <div key={category.id} className="col-12 mb-2">
              <div className="card">
                <h5 className="card-header">ID: {category.id}</h5>
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <p className="card-text">{category.slug}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <SpinnerWithText className="col-12 mt-4" />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCategories
};

export default connect(null, mapDispatchToProps)(CategoriesList);
