import React, { useState } from 'react';
import './style.css'
function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

  return (
    <div className='form'>
        <div className='form_body'>
            <div className='username'>
                <label className='form__lable' for="firstName">First Name</label>
                <input className='form__input' type='text' id='firstName' placeholder='First Name'/>
            </div>
            <div className='lsatname'>
                <label className='form__lable' for="lastName">Last Name</label>
                <input className='form__input' type='text' id='lastName' placeholder='Last Name'/>
            </div>
            <div className='email'>
                <label className='form__lable' for="email">Email</label>
                <input className='form__input' type='email' id='email' placeholder='Email'/>
            </div>
            <div className='password'>
                <label className='form__lable' for="password">Password</label>
                <input className='form__input' type='password' id='password' placeholder='Password'/>
            </div>
            <div className='confirm-password'>
                <label className='form__lable' for="confirmpassword">Confirm Password</label>
                <input className='form__input' type='password' id='confirmpassword' placeholder='Confirm Password'/>
            </div>
        </div>
        <div class ="footer">
            <button type='submit' class="btn">Register</button>
        </div>
    </div>
  )
}

export default RegistrationForm;