import { useState } from "react";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Full Name :", fullName);
    console.log("Email :", email);
    console.log("Password :", password);
    console.log("Confirm Password :", confirmPassword);
  };

  const handleClear = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Register</h1>
          <br />

          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <br />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <br />

            <div className="float-end">
              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={handleClear}
              >
                Clear
              </button>

              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>

          <br />
          <br />

          {/* <h5>Live Preview</h5>
          <p>Full Name : {fullName}</p>
          <p>Email : {email}</p> */}
        </div>
      </div>
    </>
  );
}

export default Register;
