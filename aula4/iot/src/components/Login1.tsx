"use client"
import React, {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import "@/styles/styles.css"    


export default function Login1() {
  const router = useRouter();

  const [formData, setFormData] = useState({
      username: "",
      password: ""
  })

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.username || !formData.password){
          setError("Favor preencher todos os campos!")
      }else{
          setError("")
          const url = 'https://profandresouza.pythonanywhere.com/api/users/login/'
          await axios.post(
              url, formData, {
                  headers:{
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  }
              }

          ).then((response) =>{
              localStorage.setItem('token', response.data.access)
              router.push('/users')
              }
          ).catch((error) => {
                console.log(error)
                setError(JSON.stringify(error.response.data))
              }              
          );
      }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setFormData({
          ...formData,
          [e.target.name]: e.target.value}
      );
  }

  return (
    <form onSubmit={handleSubmit} className="inputDiv flex flex-col items-center">
        <input type="text" placeholder="Username" name='username' className="input" required
        value={formData.username}
        onChange={handleChange} /><br />

        <input type="password" placeholder="Password" name='password' className="input" required
        onChange={handleChange} /><br />

        <input type="submit" className="loginButton" value={"Login"} />
        {error && <div className='text-red-900'>{error}</div>}
    </form>
  );
}
