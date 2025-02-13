import { useState } from "react"


const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const loginUser = async (event) => {
    event.preventDefault();

    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput
      })
    })
    const loginObject = await response.json();
    const userToken = loginObject.token
    console.log(userToken);
  }

  
  return (
    <>
      <h1>LOG IN</h1>
      <form onSubmit={loginUser}>
        <input
          placeholder="Email"
          type="email"
          onChange={(event) => { setEmailInput(event.target.value) }}
          value={emailInput}
        />
        <input
          placeholder="Password"
          onChange={(event) => { setPasswordInput(event.target.value) }}
          value={passwordInput}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Login;