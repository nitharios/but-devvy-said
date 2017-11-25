const validate = values => {
  const errors = {};

  if(!values.title) {
    error.title = 'Title Required';
  }

  if (!values.firstName) {
    errors.firstName ="Name Required";
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name Required';
  }

  if (!values.email) {
    errors.email = 'Email is Required';

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address: please use a valid email';
  }

  if (!values.cohort) {
    errors.cohort = 'Please insert Cohort number ';
  }

  return errors;
  };

export default validate;
