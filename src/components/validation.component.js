const validate = values => {
  const errors = {};

  if(!values.title) {
    errors.title = 'required';
  
  } else if (values.title.length <= 5) {
    errors.title = 'too short';
  }

  if(!values.topic) {
    errors.topic = 'required';
  }

  return errors;

  };

export default validate;
