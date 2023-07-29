import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="register">
        <h1>Register </h1>
        <form action="">
          <input type="text" placeholder="Email.." />
          <input type="password" placeholder="Password" />
          <button type="submit">Create User</button>
        </form>
      </div>
      <div className="login">
        <h1>Login</h1>
        <form action="">
          <input type="text" placeholder="Email.." />
          <input type="password" placeholder="Password" />
          <button type="submit">Create User</button>
        </form>
      </div>
      <div className="result">
      <h1>user logged in: <span></span></h1>
      <button type="button">Sign Out</button>
      </div>
    </div>
  );
}

export default App;
