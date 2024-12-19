import React, { useState } from 'react'

const Login = ({ handleLogin }) => {    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }

    

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className=' border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
                className='flex flex-col items-center justify-center'
                onSubmit={(e)=>{
                    submitHandler(e);
                }}
                >
                <input 
                    required 
                    className='outline-none bg-transparent placeholder:text-gray-400 border-2 font-medium border-emerald-600 text-lg rounded-full py-2 px-6' type="email" placeholder='Enter your Email'
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                />
                <input 
                    required 
                    className='outline-none bg-transparent placeholder:text-gray-400 font-medium border-2 border-emerald-600 text-lg rounded-full py-2 px-6 mt-3' type="password" placeholder='Enter your password'
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                />
                <button className='text-white outline-none hover:bg-emerald-700 bg-emerald-600 font-semibold border-none border-emrald-600 text-lg rounded-full py-2 px-8  mt-7 w-full placeholder:text-white '>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login