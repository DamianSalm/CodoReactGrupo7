import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const RegisterComp = () => {
  //useForm
  const { isAuth, signup, errors: registerErrors } = useAuth();
  const { register, handleSubmit, formState: { errors } }= useForm();

  //useEffect - useNav
  const navigate = useNavigate();
  useEffect( () => {
    if (isAuth) navigate('/admin')
  }, [isAuth])

  //Function to handle the submit
  const onSubmit = handleSubmit((values) => {
    signup(values);
  });

  return (
    <div id="register">
      <h1 className="register__title"> Register a new user here </h1>
      {
        registerErrors.map((error, i) => (
        <div key={i} className="register__subtitle">
          {error}
        </div>
          ))
      }
      <form onSubmit={onSubmit} className="register__form">
        <label>Nombre: </label>
        <input
          type="text"
          placeholder="Nombre"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p>Username is required</p>
        )}

        <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p>email is required</p>
        )}

        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p>Password is required</p>
        )}

        <button type="submit">Register</button>
      </form>
      <br />
      <p className="form__terms">Ya tienes cuenta? <Link to="/login">Log in!</Link></p>
    </div>
  );
};
export default RegisterComp;
