import  { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const showPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {
              required: true,
              pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
            })}
          />
          {errors.email && <span className="text-danger fs-6">Please enter a valid email address</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            className="form-control"
            id="exampleInputPassword1"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/i
            })}
          />
          {errors.password && (
            <span className="text-danger fs-6">
              {errors.password.type === "required" && "Password is required"}
              {errors.password.type === "minLength" && "Password must be at least 8 characters long"}
              {errors.password.type === "pattern" && "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, and 1 number"}
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button className="btn btn-info mx-5" type="button" onClick={showPassword}>
          {passwordVisible ? "Hide Password" : "Show Password"}
        </button>
      </form>
    </>
  );
}

export default Form;