import React from "react";

function SignIn() {
  const signIned = React.useState("");

  return (
    <>
      <h1>Sign In</h1>
      <form className="row p-4 g-2 needs-validation" novalidate>
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            User name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="validationCustom02"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}

export default SignIn;
