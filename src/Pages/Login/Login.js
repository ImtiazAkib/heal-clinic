import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-[780px] flex justify-center items-center">
      <div className="w-96 shadow-md p-8 rounded-md">
        <h2 className="text-2xl text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p role="alert" className="text-red-500">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters or longer",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p role="alert" className="text-red-500">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text-alt">Forgot Password?</span>
            </label>
          </div>

          <input
            type="submit"
            value="login"
            className="btn btn-accent w-full "
          />
        </form>
        <p className="mt-3 text-center">
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-secondary">
            Create new account
          </Link>
        </p>
        <p className="mt-3 text-center">
          <span
            className="w-[130px] h-[1px] inline-block"
            style={{ background: "#CFCFCF" }}
          ></span>
          <span className="mx-3">OR</span>
          <span
            className="w-[130px] h-[1px] inline-block"
            style={{ background: "#CFCFCF" }}
          ></span>
        </p>
        <button className="btn btn-outline w-full mt-5">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
