import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword, startLoginGoogleProvider } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const {loading} = useSelector(state=>state.ui)

    const {formValues, handleInputChange} = useForm({email:'', pass:''})
    const {email, pass} = formValues

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch( startLoginEmailPassword(email, pass) )
    }

    const handleGoogleLogin = () =>{
        dispatch( startLoginGoogleProvider() )
    }

  return (
    <>
        <h2 className='auth__title'>Login</h2>
        <form className='auth__form' onSubmit={handleLogin}>
            <input className='auth__input'
                type="text"
                name='email'
                placeholder='Email'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
            />

            <input className='auth__input'
                type="password"
                name='pass'
                placeholder='Password'
                value={pass}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className='btn btn-primary'
                disabled={loading}
            >   
                Login
            </button>
              {/* boton de google */}
              <div className='auth__social-networks'>
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                    <Link className='link mt-5' to="/auth/register">Create new Account</Link>
                </div>
               

        </form>
    </>
  )
};
