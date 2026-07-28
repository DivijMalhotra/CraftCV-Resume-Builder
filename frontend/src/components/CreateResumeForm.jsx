import React, { useState } from 'react'
import Input from './Inputs'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPaths'

const CreateResumeForm = () => {

  const [title, setTitle] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  
  const handleCreateResume = async (e) => {
    e.preventDefault()
    if(!title){
      setError('Please enter resume title')
      return
    }
    setError("")

    try {
      const response = await axiosInstance.post(API_PATHS.RESUME.CREATE , {
        title,
      })

      if (response.data?._id){
        navigate(`/resume/${response.data?._id}`)
      }
    } catch (error) {
      if (error.response && error.response.data.message){
        setError(error.response.data.message)
      }
      else {
        setError('Something went wrong. Please try again later.')
      }
    }
  }

  return (
    <div className='w-full'>
      <h3 className='text-2xl font-black text-[#0D1B4B] mb-2 tracking-tight'>Create New Resume</h3>
      <p className='text-slate-400 mb-7 text-sm leading-relaxed'>
        Give your resume a title to get started. You can customize everything later.
      </p>

      <form onSubmit={handleCreateResume}>
        <Input value={title} onChange={({target}) => setTitle(target.value)}
        label='Resume Title' placeholder='e.g., John Doe - Software Engineer'
        type='text'/>

        {error && <p className='text-red-500 text-sm mb-4 bg-red-50 border border-red-100 px-3 py-2 rounded-xl'>{error}</p>}

        <button type='submit' className='w-full py-3.5 bg-[#3B5BDB] text-white font-bold
        rounded-xl hover:bg-[#2F4AC0] hover:shadow-lg hover:shadow-blue-200/60 transition-all text-sm tracking-wide mt-2'>
          Create Resume
        </button>
      </form>
    </div>
  )
}

export default CreateResumeForm
