export function reduceSelectFields(fieldsObj) {
  return Object.entries(fieldsObj).reduce((options, field) => {
    if (field[1].type === 'choice') {
      options[field[0]] = field[1].choices.map(choice => ({
        value: choice.value,
        label: choice.display_name
      }));
    }
    return options;
  }, {});
}

export function reduceMany2ManyFields(fields) {
  return { categories: fields.map(f => ({ value: f.id, label: f.name })) };
}

export function parseSelectFieldsData(data, selectFields) {
  return Object.entries(data).reduce((postData, field) => {
    if (selectFields.hasOwnProperty(field[0])) {
      const [name, v] = field;
      postData[name] = Array.isArray(v) ? v.map(x => x.value) : v.value;
    } else {
      postData[field[0]] = field[1];
    }
    return postData;
  }, {});
}
