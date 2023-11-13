import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const LoginComp = () => {
  //useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuth, errors: signErrors } = useAuth();

  //Function to handle the submit
  const onSubmit = handleSubmit((values) => {
    signin(values);
  });
  //useEffect - useNav
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) navigate("/admin");
  }, [isAuth]);

  return (
    <>
      <h1> Login here </h1>
      <br />
      {signErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
      <form onSubmit={onSubmit}>
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>email is required</p>}

        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Password is required</p>}

        <button type="submit">Login</button>
      </form>
      <br />
      <p>
        No tienes cuenta? <Link to="/register">Registrate!</Link>
      </p>
    </>
  );
};
export default LoginComp;
