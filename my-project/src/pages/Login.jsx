import { Form, redirect, useActionData } from "react-router-dom";

export default function About() {
    const data = useActionData()
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <Form method="post" action="/login">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
                {data && data.error && <p>{data.error}</p>}
                </Form>
            </div>  
        </div>        
    </div>
  )
}

export const loginAction = async ({ request }) => {
  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    password: data.get('password')
  }

  console.log(submission)

  // send your post request

  if (!submission.email || !submission.password) {
    return {error: 'Put in your email and password'}
  }

  // redirect the user
  return redirect('/')
}
