import React from "react";
import { FormGroup, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import loadingGif from "../dist/images/loader.gif";
import { Link } from "react-router-dom";

export default function RegistrationForm({
  handleSubmit,
  errors,
  handleChange,
  // userData,
  loading,
}) {
  return (
    <form className="col-lg-6 mt-3" onSubmit={handleSubmit}>
      <FormGroup>
        <TextField
          variant="outlined"
          label="Email Address"
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
      <FormGroup>
        <TextField
          variant="outlined"
          label="Confirm Password"
          required
          name="confirm_password"
          error={errors && errors.confirm_password ? true : false}
          helperText={errors && errors.confirm_password}
          fullWidth
          type="password"
          onChange={handleChange}
        />
      </FormGroup>
      <Link to="/terms_conditions">
        By creating an account, you agree to InstaDriver's{" "}
        <span className="text-underline">Terms &amp; Conditions.</span>
      </Link>
      <br />
      {errors && errors.network && (
        <Alert severity="error">{errors.network}</Alert>
      )}
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
          Create InstaDriver account
        </button>
      )}
    </form>
  );
}
