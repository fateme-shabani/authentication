import React, { useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";
import Button from "./Button";

const Login = (props) => {
  // const username = useRef();
  // const password = useRef();
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // props.onLogin(username.current.value, password.current.value);
    props.onLogin(userName, password);
  };

  const usernameHandler = (e) => {
    setuserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setpassword(e.target.value);
  };

  const [buttonDisable, setbuttonDisable] = useState(false);

  useEffect(() => {
   const timerId= setTimeout(() => {
      console.log("useEffect is executing...");
      if (userName.length === 0 || password.length === 0) {
        setbuttonDisable(true);
      } 
    }, 3000);

    return ()=>{
      setbuttonDisable(false);
      console.log("clean up executing...!")
      clearTimeout(timerId)
    }
  }, [userName, password]);

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={submitHandler}>
        <div className={`${styles.dataContainer} `}>
          <label htmlFor="username">نام کاربری</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={usernameHandler}
          />
        </div>

        <div className={`${styles.dataContainer} `}>
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordHandler}
          />
        </div>

        <div className={styles.submit}>
          <Button type="submit" isDisable={buttonDisable}>
            ورود
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
