// import React from "react";
// import ButtonComponent from "../../../components/Buttons/ButtonComponent";
// import StartControl from "../../homePages/upcomingCourses/StartControl";
// import "./formReview.css";
// import { useForm } from "react-hook-form";
// function FormForReview({ titleOfLesson }) {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     mode: "all",
//   });
//   console.log("errors : ", errors);
//   return (
//     <div>
//       <section>
//         <p className="reviewSmallTittle">Leave a Review</p>
//         <p className="ReviewTitle">Be the first to review “{titleOfLesson}”</p>
//         <div className="yourLating">
//           <p>Your Rating</p>
//           <StartControl />
//         </div>
//         <form
//           action=""
//           onSubmit={handleSubmit((data) => {
//             console.log(data);
//           })}
//         >
//           <div className="formContentContainer ">
//             <div className="reviewRow">
//               <label htmlFor="yourMessageReview">Your Review</label>
//               <textarea
//                 col="10"
//                 row="10"
//                 id="yourMessageReview"
//                 {...register("MessageReview", {
//                   required: " Your Message is Required!",
//                   minLength: {
//                     value: 3,
//                     message:
//                       "Your Message is too low, can't be less than 3 charactors",
//                   },
//                   maxLength: {
//                     value: 255,
//                     message:
//                       "Your Maximum message must not greater than 255 charactors",
//                   },
//                 })}
//               />
//             </div>
//             <p className="text-danger"> {errors.MessageReview?.message}</p>
//             <div className="reviewRow">
//               <label htmlFor="YourNames">Your Name *</label>
//               <input
//                 type="text"
//                 {...register("userName", {
//                   required: "Your Name is Required",
//                   minLength: {
//                     value: 3,
//                     message: "Your Name can't be less than 3 charactor",
//                   },
//                   maxLength: {
//                     value: 30,
//                     message:
//                       "Your Name is too Long can't be greater than 30 charators",
//                   },
//                 })}
//               />
//             </div>
//             <p className="text-danger">{errors.userName?.message}</p>
//             <div className="reviewRow">
//               <label htmlFor="YourEmail">Your Email *</label>
//               <input
//                 type="email"
//                 {...register("userEmail", {
//                   required: "Your Email is Required!",
//                   pattern: {
//                     value:
//                       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                   },
//                   message: "Email Must be Valid",
//                 })}
//               />
//             </div>
//             <p className="text-danger">{errors.userEmail?.message}</p>
//             <ButtonComponent text="SUBMIT" className="btnOrange submitButton" />
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default FormForReview;
