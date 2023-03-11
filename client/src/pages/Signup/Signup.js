import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../../components/InputControl/InputControl";
import { auth, db } from "../../firebase";
import styles from "./Signup.module.css";

function Signup({setAadhars}) {
  const navigate = useNavigate();
  // const [aadhar,setAadhar] = useState("")
  const [values, setValues] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    pass: "",
    aadhar: "",
    phone: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
    if (!values.name || !values.dob || !values.gender || !values.email || !values.pass || !values.aadhar || !values.phone) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setAadhars(values.phone);
    console.log(values)
    setSubmitButtonDisabled(true);
    
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) =>{
        delete values.pass
        return await db.collection('users').doc(res.user.id).set({
          ...values
        });
      })
      .then(async (res) => {
        navigate("/");
        setSubmitButtonDisabled(false);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Sign Up</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          type="text"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Date of Birth"
          placeholder="Enter your dob"
          type="date"
          onChange={(event) => setValues((prev) => ({ ...prev, dob: event.target.value }))
          }
        />
        <label style={{ fontWeight: '700', fontSize: '1rem', color: '#313131'}} >Enter your Gender</label>
        <div class="flex">
          <label class="flex items-center mr-4">
              <input
                  type="radio"
                  name="answer"
                  value="Male"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, gender: event.target.value }))
                  }
              />
              Male
          </label>
          <label class="flex items-center mr-4">
              <input
                  type="radio"
                  name="answer"
                  value="Female"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, gender: event.target.value }))
                  }
              />
              Female
          </label>
          <label class="flex items-center mr-4">
              <input
                  type="radio"
                  name="answer"
                  value="Other"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, gender: event.target.value }))
                  }
              />
              Other
          </label>
          </div>
        <InputControl
          label="Email"
          placeholder="Enter email address"
          type="email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <InputControl
          label="Aadhar Number"
          placeholder="Enter your Aadhar Number"
          type="number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, aadhar: event.target.value }))
          }
        />
        {/* <label style={{ fontWeight: '700', fontSize: '1rem', color: '#313131'}} >Enter your Gender</label> */}
        <InputControl
          label="Phone Number"
          placeholder="Enter your Mobile Number"
          type="number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
          {/* <PhoneInput
            country={'in'}
            value={phone}
            onChange={setPhone}
          /> */}
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/"> Log In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
