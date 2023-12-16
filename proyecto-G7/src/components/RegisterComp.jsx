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
    navigate('/login')
  });

  return (
    <div id="register" className="container">
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
        <div class="form__box--grid">
          <label  className="form__label" htmlFor="name">Nombre: </label>
            <input
              type="text"
              placeholder="Nombre"
              id="name"
              className="form__input"
              {...register("username", { required: true })}
            />
        </div>
        {errors.username && (
          <p>Username is required</p>
        )}
        <div class="form__box--grid">
          <label className="form__label" htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="form__input"
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && (
          <p>email is required</p>
        )}
        <div class="form__box--grid">
          <label  className="form__label">Password: </label>
          <input
            type="password"
            placeholder="Password"
            className="form__input"
            {...register("password", { required: true })}
          />
        </div>
          {errors.password && (
          <p>Password is required</p>
        )}

        <div class="form__submission">
            <input className="form__btn btn btn--primary btn--large" type="submit" value="Registrar"/>
            <div className="form__terms">
                <input type="checkbox" name="" id="" title="Acepto"/>
                <label htmlFor="">Acepto <a className="form__link" href="">Términos y Condiciones</a></label>
            </div>
        </div>
      </form>
      <br />
      <p className="form__terms">Ya tienes cuenta? <Link to="/login">Log in!</Link></p>
    </div>
  );
};
export default RegisterComp;
