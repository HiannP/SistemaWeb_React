import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
import '../styles/CreateOrEdit.css';

export default function CreateOrEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', data_nascimento: '', cpf: '' });
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/users/${id}`)
        .then(res => {
          const user = res.data;

          if (user.data_nascimento) {
            user.data_nascimento = user.data_nascimento.split('T')[0];
          }

          setForm(user);
        })
        .catch(err => console.error(err));
    } else {
      setForm({ nome: '', email: '', telefone: '', data_nascimento: '', cpf: '' });
    }
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const req = id
      ? axios.put(`http://localhost:3001/users/${id}`, form)
      : axios.post(`http://localhost:3001/users`, form);

    req
    .then(() => navigate('/'))
    .catch(err => {
      if (err.response?.data?.errors) {
        console.log('Erros de validação:', err.response.data.errors);
        setValidationErrors(err.response.data.errors); // armazena para exibir na tela
      } else {
        console.error('Erro genérico:', err);
      }
    });    
  };

  return (
    <div className="container-create-edit">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Editar Usuário' : 'Cadastrar Usuário'}</h1>
      
      {validationErrors.length > 0 && (
        <div className="error-box">
          <ul>
            {validationErrors.map((error, index) => (
              <li key={index}>{error.msg}</li>
            ))}
          </ul>
        </div>
      )}

      <UserForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEditing={!!id}
      />

      <Link
        to="/"
        className="btn-return"
      >
        Voltar
      </Link>
    </div>
  );
}
