import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const RegisterComp = () => {
  //useForm
  const { register, handleSubmit, formState: { errors } }= useForm();
  const { isAuth, signup, errors: registerErrors } = useAuth();

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
    <>
      <h1> Register a new user here </h1>
      {
        registerErrors.map((error, i) => (
        <div key={i}>
          {error}
        </div>
          ))
      }
      <form onSubmit={onSubmit}>
        <label className="form-label">Nombre: </label>
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
      <p>Ya tienes cuenta? <Link to="/login">Log in!</Link></p>
    </>
  );
};
export default RegisterComp;
