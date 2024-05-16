//Registration
import React from "react";
import SignupImg from '../Images/SignupImg.jpg';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { userSchemaValidation } from "../Validations/UserValidation";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Features/UserSlice";




function Signup(){

  const userList = useSelector((state) => state.users.value);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const dispatch = useDispatch(); //every time we want to call an action, make an action happen
  const navigate = useNavigate(); //declares a constant variable named navigate and assigns it the value returned by the useNavigate() hook.
  //For form validation using react-hook-form
  const {
    register,
    handleSubmit: submitForm, //submitForm will be called when the form is submitted
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  const handleSubmit = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    dispatch(registerUser(userData));
    navigate("/profile");
    console.log(data);
  };
    return(
        <header className='h-100 min-vh-100 d-flex  text-light shadow' style={{ backgroundColor: 'rgba(22, 22, 22)' }}  >
            <div className='container my-5'>
            <div className="row">
                    <div className="col-lg-12">
                        <h1 style={{ color: "white", fontSize: "2em", marginTop: "90px",textAlign: "center", fontFamily: "'Playfair Display', serif" }}>Enjoy a unique artistic tour with our gallery</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 position-relative'>
                        <img src={SignupImg} className='img-fluid squaree-image' alt="Signup img" style={{height:"500px",width:"350px"}} />
                    </div>
                    <div className='col-lg-8'>
                    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Playfair Display', serif"
      }}
    >
      <form style={{ textAlign: "center" }}>
      <div style={{ marginTop: "110px" }}/>
        <div style={{ marginBottom: "30px", textAlign: "left" }}>
          <label style={{ color: "white", marginBottom: "10px", display: "block" }}>Enter name</label>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <div style={{ borderBottom: "1px solid white", display: "inline-block", width: "100%" }}>
              <input
                type="text"
                id="name"
                placeholder=""
                style={{ padding: "10px", width: "100%", border: "none", backgroundColor: "transparent", color: "white", fontFamily: "'Playfair Display', serif", paddingLeft: "120px", outline: "none" }}
                                 //register this input to the react-hook
                                 {...register("name", {
                                  value: name,
                                  onChange: (e) => setname(e.target.value),
                                })}
              />
            </div>
            <p className="error">{errors.name?.message}</p>
          </div>
        </div>
        <div style={{ marginBottom: "30px", textAlign: "left" }}>
          <label style={{ color: "white", marginBottom: "10px", display: "block" }}>Enter email</label>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <div style={{ borderBottom: "1px solid white", display: "inline-block", width: "100%" }}>
              <input
                type="email"
                id="email"
                placeholder=""
                style={{ padding: "10px", width: "100%", border: "none", backgroundColor: "transparent", color: "white", fontFamily: "'Playfair Display', serif", paddingLeft: "120px", outline: "none" }}
                value={email}
                {...register("email", {
                  value: email,
                  onChange: (e) => setemail(e.target.value),
                })}
              />
            </div>
            <p className="error">{errors.email?.message}</p>
          </div>
        </div>
        <div style={{ marginBottom: "30px", textAlign: "left" }}>
          <label style={{ color: "white", marginBottom: "10px", display: "block" }}>Enter password</label>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <div style={{ borderBottom: "1px solid white", display: "inline-block", width: "100%" }}>
              <input
                type="password"
                id="password"
                placeholder=""
                style={{ padding: "10px", width: "100%", border: "none", backgroundColor: "transparent", color: "white", fontFamily: "'Playfair Display', serif", paddingLeft: "120px", outline: "none" }}
              //register this input to the react-hook
              {...register("password", {
                value: password,
                onChange: (e) => setpassword(e.target.value),
              })}
              />
            </div>
            <p className="error">{errors.password?.message}</p>
          </div>
        </div>
        <div style={{ marginBottom: "30px", textAlign: "left" }}>
          <label style={{ color: "white", marginBottom: "10px", display: "block" }}>Confirm password</label>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <div style={{ borderBottom: "1px solid white", display: "inline-block", width: "100%" }}>
              <input
                type="password"
                id="confirmPassword"
                placeholder=""
                style={{ padding: "10px", width: "100%", border: "none", backgroundColor: "transparent", color: "white", fontFamily: "'Playfair Display', serif", paddingLeft: "120px", outline: "none" }}
                {...register("confirmPassword", {
                  value: confirmPassword,
                  onChange: (e) => setconfirmPassword(e.target.value),
                })}
              />
            </div>
            <p className="error">{errors.confirmPassword?.message}</p>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <button type="submit"  onClick={submitForm(handleSubmit)} style={{ padding: "10px 20px", backgroundColor: "white", border: "none", borderRadius: "5px", fontFamily: "'Playfair Display', serif", marginTop: "20px" }}>Sign up</button>
        </div>
        
      </form>
    </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Signup;