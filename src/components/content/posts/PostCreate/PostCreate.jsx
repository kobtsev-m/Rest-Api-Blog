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

function PostForm({ handleSubmit, options, values, submitting, ...props }) {
  return (
    <Form className="col-12 p-0" onSubmit={handleSubmit}>
      <Field name="title" required={true} {...props} />
      <Field
        type="textarea"
        name="content"
        rows={3}
        required={true}
        {...props}
      />
      <SelectField
        isMulti={true}
        name="categories"
        options={options}
        {...props}
      />
      <SelectField
        isMulti={false}
        name="status"
        options={options}
        value={values.status}
        required={true}
        {...props}
      />
      <ImageField name="images" {...props} />
      <SubmitButton text="Create" disabled={submitting} />
    </Form>
  );
}

const initialPostState = {
  values: {
    title: '',
    status: { label: 'published', value: 'P' },
    content: '',
    categories: [],
    images: []
  },
  options: {},
  errors: {},
  submitted: false,
  submitting: false
};

class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = initialPostState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    postsApi
      .getSelectFieldsOptions(['status', 'categories'])
      .then((options) => this.setState({ options }));
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitting: true });
    postsApi
      .createPost(this.state.values, this.state.options)
      .then(() => {
        this.redirect = true;
        this.setState({
          ...initialPostState,
          submitted: true,
          submitting: false
        });
      })
      .catch((error) => {
        this.setState({
          errors: error.response.data,
          submitted: true,
          submitting: false
        });
      });
  };
  handleChange = (newValue) => {
    this.setState({ values: { ...this.state.values, ...newValue } });
  };
  render() {
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
            {...this.state}
          />
        </div>
      </>
    );
  }
}

export default PostCreate;
