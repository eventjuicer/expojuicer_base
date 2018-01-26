export const validate = values => {
  const errors = {};

  // if (!values.message && !values.creative_id) {
  //   errors.message = ['Choose template or type in message below'];
  //   errors.creative_id = ['No data detected...'];
  // }

  if (!values.message) {
    errors.message = ['Type in message below'];
    // errors.creative_id = ['No data detected...'];
  }

  return errors;
};
