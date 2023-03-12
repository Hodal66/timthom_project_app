import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import "../../login/form.css";
import { useState } from "react";
import DirectToGmail from "./DirectToGmail";
import Footer from "../../components/footer/Footer";
function AdminLogin() {
  const [isArrowed, setIsArrowed] = useState(null);
  const [finalError, setFinalError] = useState(
    "Please Enter Admin Email and Password!"
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  return (
    <motion.div
      className="primaryBackGroundWhiteColor main__services_-container"
      style={{ width: "100vw", height: "100vh" }}
      initial={{ width: "0vw" }}
      animate={{ width: "100vw" }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <HeaderPageComponent
        title="Admin Login"
        prevLink="/"
        nextLink=""
        prevLinkText="Home"
        nextLinkText="Admin"
      />
      <section>
        {isArrowed ? (
          <div className="invalidCredetialsContainer text-success">
            {finalError}
          </div>
        ) : (
          <div className="invalidCredetialsContainer text-danger">
            {finalError}
          </div>
        )}
        <form
          action=""
          onSubmit={handleSubmit((data) => {
            if (
              data.userEmail === "timtom@gmail.com" &&
              data.userPassword === "Timtom10%"
            ) {
              setIsArrowed(true);
              setFinalError(
                "Well Done!! Please Click the Link Under the form to continew"
              );
            } else {
              setIsArrowed(false);
              console.log("Invalid Credentials");
              setFinalError(
                "Error! Please Your Credetial doen't match ,, Try again"
              );
            }
          })}
          className="form__main-container"
        >
          <div className="form__content-container">
            <div className="input__form-container">
              <label htmlFor="inputEmailAdress">
                Your Email <span className="text-danger">(*)</span>
              </label>
              <input
                type="email"
                {...register("userEmail", {
                  required: "Admin Email is Required!",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  },
                  message: "Email Must be Valid",
                })}
              />
              <p className="text-danger">{errors.userEmail?.message}</p>
            </div>

            <div className="input__form-container">
              <label htmlFor="YourNames">
                Your Password <span className="text-danger">(*)</span>
              </label>
              <input
                type="text"
                {...register("userPassword", {
                  required: "Admin Password is Required",
                  pattern: {
                    // value:/^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                    value:
                      "value:/^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/",
                    message: "Invalid Credetials",
                  },
                })}
              />
              <p className="text-danger">{errors.userPassword?.message}</p>
            </div>
            <div className="input__form-container">
              <input type="submit" value="SUBMIT" className="btnOrange" />
            </div>
          </div>
        </form>
        {isArrowed && (
          <section className="text-center direct__to-gmail py-2">
            <DirectToGmail />
          </section>
        )}

        <footer>
          <Footer />
        </footer>
      </section>
    </motion.div>
  );
}

export default AdminLogin;
