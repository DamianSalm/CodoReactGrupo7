import { llamarLoginUser } from "../api/apiCalls.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginComp = () => {
  //useState
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  //useNav
  const navigate = useNavigate();

  //function to register a user
  const login = async (e) => {
    e.preventDefault();
    const data = {
      email: mail,
      password: pass,
    };
    await llamarLoginUser(data);
    navigate("/");
  };

  //useEffect
  // useEffect(() => {
  //   //nothing yet
  // }, []);

  return (
    <>
      <h1> Login here </h1>
      <form onSubmit={login}>
        <label>Email: </label>
        <input
          id="mail"
          type="email"
          placeholder="Email"
          onChange={(e) => setMail(e.target.value)}
          defaultValue={mail}
        />
        <label>Password: </label>
        <input
          id="pass"
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          defaultValue={pass}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default LoginComp;
