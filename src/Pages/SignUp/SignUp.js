import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp, updateUser, signInWithGoogle } = useContext(AuthContext);

  const onSubmit = (data) => {
    setSignUpError("");
    signUp(data.email, data.password)
      .then((res) => {
        const user = res.user;
        toast("User Created Successfully");
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((error) => console.log(error));
      })
      .catch((err) => {
        setSignUpError(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="h-[780px] flex justify-center items-center">
      <div className="w-96 shadow-md p-8 rounded-md">
        <h2 className="text-2xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p role="alert" className="text-red-500">
                {errors.name?.message}
              </p>
            )}
          </div>
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
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must have one lowercase letter,one uppercase letter,one digit,one special character and length of 8 characters",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p role="alert" className="text-red-500">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="btn btn-accent w-full mt-3"
          />
          <div>
            {signUpError && <p className="text-red-500 my-2">{signUpError}</p>}
          </div>
        </form>
        <p className="mt-3 text-center">
          Already a member?{" "}
          <Link to="/login" className="text-secondary">
            Click to Login
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
        <button
          className="btn btn-outline w-full mt-5"
          onClick={handleGoogleSignIn}
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
