"use client"
import React, {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function Register() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        username: "",
        email:"",
        password: ""
    })

    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!formData.username || !formData.email || !formData.password){
            setError("Favor preencher todos os campos!")
        }else{
            setError("")
            const url = 'https://profandresouza.pythonanywhere.com/api/users/register/'
            const req = await axios.post(
                url, formData, {
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }

            ).then((response) =>{
                console.log(response)
                router.push('/login')
                }
            ).catch((error) => {
                setError(JSON.stringify(error.reponse.data))
                }              
            );
            console.log(req)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value}
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex gap-4' >
                <label> Usuário
                    <input type="text" name="username" className='text-black' required 
                    value={formData.username}
                    onChange={handleChange}/>
                </label>

                <label onSubmit={handleSubmit}> Email
                    <input type="text" name="email" className='text-black' required 
                    onChange={handleChange}/>
                </label>

                <label onSubmit={handleSubmit}> Senha
                    <input type="password" name="password" className='text-black' required 
                    onChange={handleChange}/>
                </label>

                <input type="submit" value={"Enviar"} />
            </form>

            {error && <div>{error}</div>}
        </div>
    );
}