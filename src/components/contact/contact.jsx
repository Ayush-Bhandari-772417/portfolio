// import React from 'react'
// import './contact.css'
// import { AiOutlineMail } from "react-icons/ai";
// import { BsFillTelephoneFill } from "react-icons/bs";

// const contact = () => {

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "0070e222-2c1a-411f-828a-dd2528445924");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       // console.log("Success", res);
//       alert(res.message);
//     }
//   };

//   return (
//     <div id='contact' className='contact'>
//         <div className="contact-title">
//           <h1>Connect with me</h1>
//         </div>
//         <div className="contact-section">
//           <div className="contact-left">
//             <h1>Let's talk</h1>
//             <p>I am currently available to new projects</p>
//             <div className="contact-details">
//               <div className="contact-detail">
//                 <AiOutlineMail/>
//                 <p>er.st.ayushbhandari@gmail.com</p>
//               </div>
//               <div className="contact-detail">
//                 <BsFillTelephoneFill />
//                 <p>9864478266</p>
//               </div>
//             </div>
//           </div>
//           <form onSubmit={onSubmit} className="contact-right">
//             <label htmlFor="">Your name</label>
//             <input type="text" placeholder='Enter your name' name='name' />
//             <label htmlFor="">Your Email</label>
//             <input type="email" placeholder='Enter your email' name='email' />
//             <label htmlFor="">Write your message here</label>
//             <textarea name="mesaage" rows="8" placeholder='Enter your message'></textarea>
//             <button type='submit' className="contact-submit">Submit now</button>
//           </form>
//         </div>
//     </div>
//   )
// }

// export default contact









import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', "0070e222-2c1a-411f-828a-dd2528445924"); // Replace with your Web3Forms access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Connect with me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am currently available for new projects. I am passionate about coding. I love to listen and talk about philosophy too.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <AiOutlineMail size={24} />
              <p>er.st.ayushbhandari@gmail.com</p>
            </div>
            <div className="contact-detail">
              <BsFillTelephoneFill size={24} />
              <p>9864478266</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;