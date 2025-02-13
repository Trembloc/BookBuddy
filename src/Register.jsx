import { useState } from "react"

const register = () => {
  const [registerEmailInput, setRegisterEmailInput] = useState('');
  const [registerPasswordInput, setRegisterPasswordInput] = useState('');
  const [registerFirstNameInput, setRegisterFirstNameInput] = useState('');
  const [registerLastNameInput, setRegisterLastNameInput] = useState('');



  const createUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: "Post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: registerFirstNameInput,
          lastname: registerLastNameInput,
          email: registerEmailInput,
          password: registerPasswordInput
        })
      })
      const user = await response.json();
      console.log(user);
      
    } catch (err) {
      console.log(`Error`, err);
    }
  }

  return (

    <form onSubmit={createUser}>
      <input
        placeholder="Email"
        type="email"
        onChange={(event) => { setRegisterEmailInput(event.target.value) }}
        value={registerEmailInput}
      />
      <input
        placeholder="Password"
        onChange={(event) => { setRegisterPasswordInput(event.target.value) }}
        value={registerPasswordInput}
      />
      <input placeholder="First Name"
        onChange={(event) => { setRegisterFirstNameInput(event.target.value) }}
        value={registerFirstNameInput}
      />
      <input placeholder="Last Name"
        onChange={(event) => { setRegisterLastNameInput(event.target.value) }}
        value={registerLastNameInput} />
      <button>Submit</button>
    </form>
  )
}

export default register;