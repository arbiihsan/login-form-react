import React from "react";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const { email, password } = useParams();
  console.log(email, password, "<<< di home");

  return (
    <div>
      <p>Email: {decodeURIComponent(email)}</p>
      <p>Password: {decodeURIComponent(password)}</p>
    </div>
  );
};

export default HomePage;
