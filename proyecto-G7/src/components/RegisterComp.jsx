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
      <div className="register__header "></div>
      <h1 className="register__title"> Register a new user here </h1>
      {
        registerErrors.map((error, i) => (
        <div key={i} className="register__subtitle">
          {error}
        </div>
          ))
      }
      <form onSubmit={onSubmit} className="register__form">
        <label  className="form__label">Nombre: </label>
        <input
          type="text"
          placeholder="Nombre"
          className="form__input"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p>Username is required</p>
        )}

        <label className="form__label">Email: </label>
        <input
          type="email"
          placeholder="Email"
          className="form__input"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p>email is required</p>
        )}

        <label  className="form__label">Password: </label>
        <input
          type="password"
          placeholder="Password"
          className="form__input"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p>Password is required</p>
        )}

        <button type="submit" className="btn--primary btn--large">Register</button>
      </form>
      <br />
      <p className="form__terms">Ya tienes cuenta? <Link to="/login">Log in!</Link></p>
    </div>
  );
};
export default RegisterComp;
