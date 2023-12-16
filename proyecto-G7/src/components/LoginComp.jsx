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
    <div id="login" className="container">
      <h1 className="login__title"> Login here </h1>
      <br />
      {signErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
      <form onSubmit={onSubmit} className="login__form">
        <div className="form__box--grid">
          <label className="form__label" htmlFor="email">Email: </label>
          <input
            type="email"          
            placeholder="Email"
            className="form__input"
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && <p>email is required</p>}
        <div className="form__box--grid">
          <label className="form__label" htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Password"
            className="form__input"
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && <p>Password is required</p>}

        <div className="form__submission">
                    <input className="form__btn btn btn--primary btn--large" type="submit" value="Ingresar"/>
                    <div className="form__remember">
                        <input type="checkbox" name="remember" title="recordarme" id=""/>
                        <label htmlFor="">Recordarme</label>
                    </div>
                </div>
      </form>
      <p className="form">
        No tienes cuenta? <Link to="/register" className="form__link" >Registrate!</Link>
      </p>
    </div>
  );
};
export default LoginComp;
