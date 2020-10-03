import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login() {
  // TODO: implement client side validation and redirection
  // TODO: source for spinner icon animation
  const [email, setEmail] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    // TODO: fetch user session and data
    // TODO: redirect to collections
    console.log("form submit data");
  }

  function handleValidaton(e) {
    setEmail(e.target.value);
    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    //isEmail.test == true else false animation
  }

  return (
    <FormWrapper>
      <form action="#" method="POST" onSubmit={handleLogin}>
        <label htmlFor="email">Enter your email address </label>
        <input
          title="johnsomething@domain.com"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleValidaton}
        />
        <label htmlFor="password">Enter your password </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          title="Please enter a password"
          required
          minLength={6}
        />
        <button type="submit" value="user">
          login
        </button>

        <span>or</span>
        <button>Login in with Twitter</button>
        <p>
          Don't have an account? <Link to="/signup"> you can sign up</Link>
        </p>
      </form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  & {
    flex: 1 1 auto;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-image: var(--gradient);
  }

  form {
    border: none;
    color: grey;
    background-color: ${({ theme }) => theme.form};
    border-radius: 3px;
    padding: 2.5em;
    box-shadow: var(--shadow);
    width: 60%;
    max-width: 300px;
    margin: 3.6em;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  input[type="email"],
  input[type="password"] {
    width: 100%;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.lightGrey};
    padding: 1em;
    margin: 0.5em;
  }

  button {
    color: var(--background);
    background-color: var(--primary);
    font-weight: 100;
    font-size: 90%;
    text-transform: uppercase;
    padding: 0.8em;
    border: none;
    border-radius: 10px;
  }

  span,
  p {
    padding: 1em;
    color: grey;
  }

  a {
    color: grey;
    font-weight: bold;
    text-decoration: none;
  }
`;
