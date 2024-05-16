//Login
import React from "react";
import backgroundImage from '../Images/login.jpg';
import { Link } from 'react-router-dom';
import {useState,useEffect } from "react";
import { LoginValid } from "../Validations/LoginValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {login, validate} from "../Features/UserSlice";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";



function Profile() {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);

  const {
    register,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginValid) });
//checking if the butoon work 
  useEffect(() => {
    if (isSuccess) {
      // alert("Welcome.."+user.uname)
      navigate("/");  
    }
    if (isError) {
      alert("Invalid User...");
      navigate("/profile");
    
    }
  }, [user, isSuccess, isError]);

  
  const handleSubmit = (formData) => {
    const data = {
      email: email,
      pass: pass,
    };
    dispatch(login(data));
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "'Playfair Display', serif"
      }}
    >
      <h1 style={{ color: "white", fontSize: "3em", marginBottom: "50px", fontFamily: "'Playfair Display', serif" }}>Welcome back</h1>
      <form style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "30px", textAlign: "left" }}>
          <label style={{ color: "white", marginBottom: "10px", display: "block" }}>Email</label>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <div style={{ borderBottom: "1px solid white", display: "inline-block", width: "100%" }}>
              <input
             
                type="email"
                id="email"
                placeholder=""
                style={{ padding: "10px", width: "100%", border: "none", backgroundColor: "transparent", color: "white", fontFamily: "'Playfair Display', serif", paddingLeft: "120px", outline: "none" }}
                {...register("email", {
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                })}
              />
              <p className="error">{errors.email?.message}</p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "30px", textAlign: "left" }}>
          <label style={{ color: "white", marginBottom: "10px", display: "block" }}>Password</label>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <div style={{ borderBottom: "1px solid white", display: "inline-block", width: "100%" }}>
              <input
             
                type="password"
                id="password"
                placeholder=""
                style={{ padding: "10px", width: "100%", border: "none", backgroundColor: "transparent", color: "white", fontFamily: "'Playfair Display', serif", paddingLeft: "120px", outline: "none" }}
                {...register("password", {
                  value: pass,
                  onChange: (e) => setPass(e.target.value),
                })}
              />
              <p className="error">{errors.password?.message}</p>
            </div>
          </div>
        </div>
        <div style={{ color: "white" }}>Don't have an account? <Link to="/signup" style={{ color: "#3D3820", fontWeight :"bold"}}>Sign up</Link></div>
        <div style={{ marginBottom: "20px" }}>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "white", border: "none", borderRadius: "5px", fontFamily: "'Playfair Display', serif", marginTop: "20px" }}
           onClick={submitForm(handleSubmit)}>Sign In</button>
        </div>
        
      </form>
    </div>
  );
}
 
export default Profile;