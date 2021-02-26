import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
// Posts Api
import { postsApi } from 'api/api';
// Common
import Field from 'components/common/form/Field';
import SelectField from 'components/common/form/SelectField';
import ImageField from 'components/common/form/ImageField';
import { BackButton, SubmitButton } from 'components/common/buttons/Buttons';

function PostForm({ handleSubmit, ...props }) {
  return (
    <Form className="col-12 p-0" onSubmit={handleSubmit}>
      <ImageField name="images" label="Put here your images" {...props} />
      <Field name="title" {...props} />
      <Field type="textarea" name="content" rows={3} {...props} />
      <SelectField isMulti={false} name="status" {...props} />
      <SelectField isMulti={true} name="categories" {...props} />
      <SubmitButton text="Create" />
    </Form>
  );
}

const initialPostState = {
  values: {
    title: '',
    status: '',
    content: '',
    categories: [],
    images: []
  },
  options: {},
  errors: {},
  isSubmitted: false
};

class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = initialPostState;
    this.files = new FormData();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    postsApi
      .getSelectFieldsOptions()
      .then(optionsObj => this.setState({ options: optionsObj }));
    postsApi
      .getMany2ManyFieldsOptions()
      .then(optionsObj => ({ ...this.state.options, ...optionsObj }))
      .then(optionsObj => this.setState({ options: optionsObj }));
  }
  handleSubmit = event => {
    event.preventDefault();
    postsApi
      .createPost(this.state.values, this.state.options)
      .then(() => {
        this.redirect = true;
        this.setState({ ...initialPostState, isSubmitted: true });
      })
      .catch(error => {
        this.setState({ errors: error.response.data, isSubmitted: true });
      });
  };
  handleChange = (event, action) => {
    const newValue = event.target
      ? { [event.target.name]: event.target.value }
      : { [action.name]: event };
    this.setState({ values: { ...this.state.values, ...newValue } });

    if (event.target && event.target.files) {
      const newFiles = { [event.target.name]: [...event.target.files] };
      this.setState({ values: { ...this.state.values, ...newFiles } });
      console.log(newFiles);
    }
  };
  render() {
    console.log(this.state.values.images);
    if (this.redirect) {
      return <Redirect to="/posts" />;
    }
    return (
      <>
        <div className="row">
          <BackButton to="/posts" />
        </div>
        <hr className="row" />
        <div className="row">
          <PostForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            options={this.state.options}
            errors={this.state.errors}
            isSubmitted={this.state.isSubmitted}
          />
        </div>
      </>
    );
  }
}

export default PostCreate;
