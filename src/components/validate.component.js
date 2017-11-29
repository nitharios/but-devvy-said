const validate = values => {
  let title = values.title;

  const errors = {};

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
