import { useState } from 'react'

export default function About() {

    const [person, setPerson] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    setErrorMessage('')

    if (!person.username || !person.password) {
       return setErrorMessage('Put in email or password!')
    }

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: person.username,
            password: person.password,
            // expiresInMins: 60, // optional
        })
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            if (data.token) {
                setErrorMessage("Logged in!")
            } else {
                setErrorMessage("Credentials wrong!")
            }
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Username</span>
                </label>
                <input name="username" value={person.username} onChange={handleChange} placeholder="username" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input name="password" value={person.password} onChange={handleChange} placeholder="password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
                </form>
                <p>{errorMessage}</p>
            </div>  
        </div>        
    </div>
  )
}
