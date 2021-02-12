import React from "react";
import loadingGif from "../dist/images/loader.gif";
import { FormGroup, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function LoginForm({
  handleChange,
  handleSubmit,
  loading,
  errors,
}) {
  return (
    <form
      className="col-lg-6 mt-3"
      method="POST"
      id="frmLogin"
      name="frmLogin"
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <TextField
          variant="outlined"
          label="Email Adress"
          required
          error={errors && errors.email ? true : false}
          helperText={errors && errors.email ? errors.email : null}
          name="email"
          fullWidth
          type="email"
          onChange={handleChange}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <TextField
          variant="outlined"
          label="Password"
          required
          name="password"
          fullWidth
          type="password"
          error={errors && errors.password ? true : false}
          helperText={errors && errors.password}
          onChange={handleChange}
        />
      </FormGroup>
      <br />
      {loading === true ? (
        <img src={loadingGif} alt="loading-gif" />
      ) : (
        <button
          type="submit"
          className="btn btn-secondary width100"
          id="btnRegister"
          onSubmit={handleSubmit}
        >
          Sign In
        </button>
      )}
      <Link to="/password/reset">Forgot password</Link>
      <br />
      <img
        src={process.env.PUBLIC_URL + "/images/or.svg"}
        alt="search driver"
      />
      <br />
      <br />
    </form>
  );
}
