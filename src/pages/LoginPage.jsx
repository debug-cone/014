// react
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

// router
import { useNavigate } from 'react-router-dom'

// toastify
import { toast } from 'react-toastify'

function LoginPage() {

    // states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ref
    const inputRef = useRef();

    // effect
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    // redirect
    const navigate = useNavigate()

    // functions 
    function handleInput(e) {
        // console.log(e.target.name, e.target.value);
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        // console.log(email, password);
        // save
        localStorage.setItem(
            'user', 
            JSON.stringify( {email, password}) 
        );

        // reset
        setEmail('');
        setPassword('');

        // redirect
        setTimeout(() => {
            toast.success('Successfully logged in!');
            navigate('/');
        }, 2000)
    }

    return (
        <div className='container mx-auto'>
            
            <h2 className='text-center text-2xl my-[50px]'>Login</h2>

            <form className='mx-auto p-[20px] w-[50%] border-2 border-teal-500 rounded-sm flex flex-col '>
                <input 
                    type="email" 
                    placeholder='E-Mail'
                    className='border-2 border-teal-500 rounded-md px-[12px] py-[20px] mb-2'
                    name="email"
                    value={email}
                    onInput={handleInput}
                    ref={inputRef}
                />
                <input 
                    type="password" 
                    placeholder='Password' 
                    className='border-2 border-teal-500 rounded-md px-[12px] py-[20px] mb-4'
                    name="password"
                    value={password}
                    onInput={handleInput}
                />
                <button 
                    type="submit" 
                    className='px-[12px] py-[20px] bg-teal-500 rounded-md text-white text-xl'
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </form>

        </div>
    )
}

export default LoginPage