import { baseApi } from './api';

export async function reduceSelectFields(fieldsObj, fieldNames) {
  let options = {};
  for (let name of fieldNames) {
    if (fieldsObj[name].type === 'choice') {
      options[name] = fieldsObj[name].choices.map((choice) => ({
        value: choice.value,
        label: choice.display_name
      }));
    } else if (fieldsObj[name].type === 'field') {
      await baseApi.get(`${name}/`).then((response) => {
        options[name] = response.data.map((f) => ({
          value: f.id,
          label: f.name
        }));
      });
    }
  }
  return options;
}

export function parseSelectFieldsData(data, selectFields) {
  return Object.entries(data).reduce((postData, field) => {
    if (selectFields.hasOwnProperty(field[0])) {
      const [name, v] = field;
      postData[name] = Array.isArray(v) ? v.map((x) => x.value) : v.value;
    } else {
      postData[field[0]] = field[1];
    }
    return postData;
  }, {});
}

export function toFormData(parsedValues) {
  let formData = new FormData();
  for (let [key, value] of Object.entries(parsedValues)) {
    if (typeof value === 'object') {
      for (let item of value) {
        formData.append(key, item);
      }
    } else {
      formData.append(key, value);
    }
  }
  return formData;
}
