export const validate = values => {

  console.log(values);

  const errors = { data : {} };

  if (! values.data)
  {
      errors.data.subject = "Required";
  }
  else
  {
    // if(! "from_email" in values.data || (values.data.from_email && values.data.from_email.indexOf("@") < 1))
    // {
    //   errors.data.from_email = "Address seems to be incorrect";
    // }
    //
    // if(! "subject" in values.data || (values.data.subject || "").length < 10)
    // {
    //   errors.data.subject = "Subject must be more descriptive";
    // }

  }

  if(!values.contactlist_ids || !Array.isArray(values.contactlist_ids))
  {
    errors.contactlist_ids = "Choose contact list(s)";
  }

  if(!values.name)
  {
    errors.name = "Name must be more descriptive";
  }
  else
  {
    if(values.name.length < 10)
    {
        errors.name = "Name must be more descriptive";
    }
  }

  return errors;
};
