'use client'
import { useState, useEffect } from "react";
import '../styles/styles.css';
import 'primeicons/primeicons.css';
import axios from 'axios';

interface UserData {
  id: number;
  username: string;
  email: string;
  password: string;
}

export default function UserCard() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const url = 'https://profandresouza.pythonanywhere.com/api/users/';
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        setUsers(response.data);
      } catch (error: any) {
        setError(error.response?.data || "Erro ao carregar usuários.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-3 p-3">
      {users.map(user => (
        <div key={user.id} className="cards bg-gray-800 flex flex-col">
          <div className="userHeader flex flex-col items-center text-white mb-4 gap-4">
            <div className="userImage w-16 h-16 rounded-full flex items-center justify-center">
              <i className="pi pi-user" style={{ color: '#22c55e', fontSize: '2.5rem' }}></i>
            </div>
            <h3 className="text-lg font-semibold">{user.username}</h3>
            <p className="text-sm">{user.email}</p>
          </div>

          <div className="userContent flex flex-col flex-grow justify-between">
            <div className="userActions flex justify-around mt-4">
              <button className="bg-green-500 text-white py-1 px-2 rounded-lg">Editar</button>
              <button className="bg-red-500 text-white py-1 px-2 rounded-lg">Deletar</button>
            </div>
          </div>
        </div>
      ))}
      {error && <div className="text-red-500 col-span-5">{error}</div>}
    </div>
  );
}
