import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';
import '../styles/Home.css';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title-list">Lista de Usuários</h1>

      <div className="container-list">
        <UserList users={users} />
      </div>

      <div className="container-add">
        <Link
          to="/create"
          className="btn-add"
        >
          Cadastrar Novo Usuário
        </Link>
      </div>
    </div>
  );
}
