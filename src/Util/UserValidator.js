/* eslint-disable no-useless-escape */
const isEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(regex)) {
    return true;
  } else return false;
};

const isEmpty = (string) => (string.trim() === "" ? true : false);

export const validateSignupData = (user) => {
  console.log(user);
  let errors = {};

  if (isEmpty(user.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(user.email)) {
    errors.email = "Must be a valid email";
  }

  if (isEmpty(user.password)) {
    errors.password = "Must not be empty";
  }

  if (user.password.length < 6) {
    errors.password = "password must be longer than or equal to 6 characters";
  }

  if (user.password !== user.confirm_password) {
    errors.confirm_password = "Password must match";
  }

  if (isEmpty(user.role)) {
    errors.role = "Must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
