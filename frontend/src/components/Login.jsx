import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import { authStyles as styles } from '../assets/dummyStyle';
import Input from './Inputs';
import { validateEmail } from '../utils/helper';
import { LayoutTemplate } from 'lucide-react';



const Login = ({setCurrentPage}) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault()
        if (!validateEmail) {
            setError('Please enter a valid Email address')
            return;
        }
        if (!password) {
            setError('Please enter password')
            return;
        }
        setError('')

        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {email,password})
            const {token} = response.data
            if (token) {
                localStorage.setItem('token', token)
                updateUser(response.data)
                navigate('/dashboard')
            }
        } catch (error) {
            setError(error.response?.data?.message || "Something went wrong. Please try again")
        }
    }


  return (
    <div className={styles.container}>
        {/* Logo Mark */}
        <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                <LayoutTemplate className="text-white" size={22} />
            </div>
        </div>

        <div className={styles.headerWrapper}>
            <h3 className={styles.title}>Welcome Back</h3>
            <p className={styles.subtitle}>
                Sign in to continue building amazing resumes
            </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className={styles.form}>
            <Input value={email} onChange={({target}) => setEmail(target.value)}
            label='Email Address'
            placeholder='you@example.com'
            type='email'/>

            <Input value={password} onChange={({target}) => setPassword(target.value)}
            label='Password'
            placeholder='Min 8 characters'
            type='password'/>

            {error && <div className={styles.errorMessage}>{error}</div>}

            <button type='submit' className={styles.submitButton}>
                Sign In
            </button>

            <p className={styles.switchText}>
                Don't have an account?{' '}
                <button type='button' className={styles.switchButton} onClick={() => setCurrentPage('signup')}>
                    Create one
                </button>
            </p>
        </form>
    </div>
  )
}

export default Login
