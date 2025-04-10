import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/UserList.css';

export default function UserList({ users }) {
  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      axios.delete(`http://localhost:3001/users/${id}`)
        .then(() => {
          window.location.reload();
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <ul className="container-user-list">
      {users.map(user => (
        <li key={user.id} className="user-item">
          <span>{user.nome} - {user.email}</span>
          <div className="container-btn">
            <Link to={`/details/${user.id}`} className="btn-get">Info</Link>
            <Link to={`/edit/${user.id}`} className="btn-edit">Editar</Link>
            <button onClick={() => handleDelete(user.id)} className="btn-delete">Deletar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
