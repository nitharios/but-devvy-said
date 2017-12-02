const validate = values => {

  let title = values.title;

  const errors = {};

  if(!values.title) {
    errors.title = 'Please provide a title!';
  
  } else if (title.length <= 5 ) {
    errors.title = 'Title too short!';
  }

  if(!values.topic) {
    errors.topic = 'required';
  }

  return errors;

};

export default validate;
