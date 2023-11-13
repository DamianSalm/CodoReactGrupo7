import { llamarRegisterUser } from "../api/apiCalls.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterComp = () => {
  //useState
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  //useNav
  const navigate = useNavigate();

  //function to register a user
  const create = async (e) => {
    e.preventDefault();
    const data = {
      username: name,
      email: mail,
      password: pass,
    };
    await llamarRegisterUser(data);
    navigate("/");
  };

  //useEffect
  // useEffect(() => {
  //   //nothing yet
  // }, []);

  return (
    <>
      <h1> Register a new user here </h1>
      <form onSubmit={create}>
        <label className="form-label">Nombre: </label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Nombre"
          defaultValue={name}
        />
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
export default RegisterComp;
