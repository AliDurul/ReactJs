import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";
import { useEffect, useState } from "react";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [kimsin, setKimsin] = useState();

  const register = async () => {
    try {
      const registerUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(registerUser);
      console.log("basarali register");
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const loginUser = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("login oldu");
      console.log(loginUser.user.displayName);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setKimsin(currentUser);
      console.log(currentUser);
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div className="register">
        <h1>Register </h1>

        <input
          type="text"
          placeholder="Email.."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button type="submit" onClick={register}>
          Create User
        </button>
      </div>
      <div className="login">
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Email.."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button type="submit" onClick={login}>
          login User
        </button>
      </div>
      <div className="result">
        <h1>
          user logged in: <span>{kimsin?.email}</span>
        </h1>
        <button type="button" onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default App;
