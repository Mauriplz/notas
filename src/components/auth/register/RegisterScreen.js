import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegister } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';
import validator from 'validator';
import { cleanMessage, setMessage } from '../../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msg, loading} = useSelector(state=>state.ui)

    const {formValues, handleInputChange} = useForm({name:'', email:'', pass:'', pass_confirm:''})
    const { name, email, pass, pass_confirm } = formValues;

    const handleRegister = (e) =>{
        e.preventDefault();
        if(isFormValid()){
            dispatch( startRegister( name, email, pass ) )
        }
    }

    const isFormValid = () =>{
        if(name.trim().length <= 2){
            dispatch( setMessage( 'Nombre Invalido' ) )
            return false
        }else if( !validator.isEmail(email) ){
            dispatch( setMessage( 'Email Invalido' ) )
            return false
        }else if(pass !== pass_confirm || pass.length <=5){
            dispatch( setMessage( 'Password Invalida' ) )
            return false
        }

        dispatch( cleanMessage() )
        return true
    }

  return (
      <>
      <h2 className='auth__title'>Register</h2>
        <form className='auth__form' onSubmit={handleRegister}>
        <input className='auth__input'
                type="text"
                name='name'
                placeholder='Name'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
            />
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
            <input className='auth__input'
                type="password"
                name='pass_confirm'
                placeholder='Password Confirm'
                value={pass_confirm}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className='btn btn-primary'
                disabled={loading}
            >   
                Register
            </button>
            <div className='auth__social-networks-register'>
                {
                    (msg) && 
                    (
                        <p style={{color:'red'}}>{msg}</p>
                    )
                }
                <Link className='link mt-1' to="/auth/login">Back</Link>
            </div>
                    
                
               

        </form>
      </>
  );
};
