import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import OAuth from '../components/OAuth';
// Once Redux is done add useDispatch and the below
// useSelector lets us bring in loading errors from userSlice
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';

export default function SignIn() {
  // for handle change
  const [formData, setFormData] = useState({});
  // now that we have redux-toolkit we don't want to use these 2 below
  // useSelector lets us bring in loading errors from userSlice
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  // inside the signIn we say to use errorMessage so convert it
  // user is from the name: user in userSlice
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  // initialize dispatch to dispatch start success or failure
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle input formData, spread operator to keep data in multiple fields, remove spaces
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    // prevent the page from refreshing
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // return setErrorMessage('Please fill out all fields.');
      // convert to dispatch
      return dispatch(signInFailure('Please fill out all fields.'));
    }
    try {
      // setLoading(true);
      // // make error message false at the beginning, catch later
      // setErrorMessage(null);
      // get rid of those 2 to use redux
      dispatch(signInStart());
      // use fetch method to interact with api
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // convert to string then send it; add a proxy to vite.config.js so target api url is valid
        body: JSON.stringify(formData),
      });
      // convert to json- go to browser "Network"/click "signin"/shows "Signin successful"/also on Mongo DB
      // browser signin form data shows in "Payload" and POST response in "Network/Headers"
      const data = await res.json();
      if (data.success === false) {
        // instead of the below, use the dispatch error
        // return setErrorMessage(data.message) dispatches from action.payload in user slice;
        dispatch(signInFailure(data.message));
      }
      // loading effect and if no error, added useNavigate to send user to signin page
      // setLoading(false);
      if (res.ok) {
        // everything is OK, pass in the action.payload data from userSlice.  currentUser = data
        dispatch(signInSuccess(data));
        navigate('/');
      }
      // handle errors listed above, in form fields and add the alert below
    } catch (error) {
      // setErrorMessage(error.message);
      // // if no error
      // setLoading(false);
      // dispatch failure to replace the above
      dispatch(signInFailure(error.message));
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
            If you would like to sign in to leave comments, please enter your
            email and password, or use the Google signin button.
          </p>
        </div>
        {/* div for the right side */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
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
                placeholder='********'
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
                <span className='text-blue-500'>Sign In</span>
              )}
            </Button>
            {/* <OAuth /> */}
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
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
