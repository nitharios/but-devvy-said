const validate = values => {
  let title =values.title;
  let topic = values.topic;

  const errors = {};
  console.log(values, 'the values <---')
  if(!values.title) {
    errors.title = 'required';
  
  } else if (title.length <= 5 ) {
    errors.title = 'too short';
  }

  if(!values.topic) {
    errors.topic = 'required';
  }

  return errors;

  };

export default validate;
