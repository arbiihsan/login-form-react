import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const LoginPage = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [emailError, setEmailError] = useState("");
  //   const [passwordError, setPasswordError] = useState("");

  //   const emailValidation = (email) => {
  //     if (email.length < 10 || email.length > 15 || !email.includes("@")) {
  //       setEmailError("Email is not Valid!");
  //     } else {
  //       setEmailError("");
  //     }
  //   };

  //   const passwordValidation = (password) => {
  //     if (password.length < 8) {
  //       setPasswordError("Password is not Valid");
  //     } else {
  //       setPassword("");
  //     }
  //   };

  //   const handleEmail = (e) => {
  //     setEmail(e?.target.value);
  //     console.log(email, "<<<<<");
  //     emailValidation(e?.target.value);
  //   };

  //   const handlePassword = (e) => {
  //     setPassword(e?.target.value);
  //     console.log(password, "<<<<<<<");
  //     passwordValidation(e?.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (!emailError && !passwordError) {
  //       console.log(`Email: ${email}`);
  //       console.log(`Password: ${password}`);
  //     }
  //   };
  const navigate = useNavigate();
  //   const history = useHistory();

  const defaultValue = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState({ ...defaultValue });
  const handleChange = (e) => {
    const { name, value } = e?.target;
    console.log(name, value, "<<<<<<<");
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.email.length < 10 ||
      form.email.length > 15 ||
      !form.email.includes("@")
    )
      throw new Error("email is not valid");

    if (form.password.length < 8) throw new Error("password is not valid");

    setForm(defaultValue);
    console.log(form, "<<<<<<<");
    const query = `?email=${encodeURIComponent(
      form.email
    )}&password=${encodeURIComponent(form.password)}`;
    navigate(`/home${query}`);

    // navigate("home", { state: { email, password } });

    // history.push({
    //   pathname: "/",
    //   state: form,
    // });
  };

  return (
    <>
      <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
