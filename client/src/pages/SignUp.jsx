import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  // for handle change
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handle input formData, spread operator to keep data in multiple fields, remove spaces
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    // prevent the page from refreshing
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      // make error message false at the beginning, catch later
      setErrorMessage(null);
      // use fetch method to interact with api
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // convert to string then send it; add a proxy to vite.config.js so target api url is valid
        body: JSON.stringify(formData),
      });
      // convert to json- go to browser "Network"/click "signup"/shows "Signup successful"/also on Mongo DB
      // browser signup form data shows in "Payload" and POST response in "Network/Headers"
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      // loading effect and if no error, added useNavigate to send user to signin page
      setLoading(false);
      if (res.ok) {
        navigate('/sign-in');
      }
      // handle errors listed above, in form fields and add the alert below
    } catch (error) {
      setErrorMessage(error.message);
      // if no error
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* div for the left side */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-0 py-3 rounded-lg text-orange-500 border-2 border-black'>
              Corm
            </span>
            Repo
          </Link>
          <p className='text-sm mt-5'>
            This repo is where I keep links to most of my web projects/demo
            projects. As I continue to learn, it will continue to grow! If you
            would like to sign up to leave comments, you can enter your email
            and password, or use the Google signin button.
          </p>
        </div>
        {/* div for the right side */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              color='gray'
              outline
              type='submit' // prevent multiple submit requests
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                <span className='text-blue-500'>Sign Up</span>
              )}
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {/* add error message */}
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
