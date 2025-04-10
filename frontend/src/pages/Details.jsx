import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import UserDetail from '../components/UserDetail';
import '../styles/Detail.css';

export default function Detail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!user) return <p>Carregando...</p>;

  return (
    <div className="container-detail">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Usuário</h1>
      <UserDetail user={user} />

      <Link
        to="/"
        className="btn-return"
      >
        Voltar
      </Link>

    </div>
  );
}
