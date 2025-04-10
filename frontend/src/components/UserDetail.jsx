import React from 'react';
import '../styles/Detail.css';

export default function UserDetail({ user }) {
  return (
    <div className="detail-list">
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nome:</strong> {user.nome}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Telefone:</strong> {user.telefone}</p>
      <p><strong>Data de Nascimento:</strong> {new Date(user.data_nascimento).toLocaleDateString('pt-BR')}</p>
      <p><strong>CPF:</strong> {user.cpf}</p>
      <p><strong>Perfil criado em:</strong> {new Date(user.data_criacao).toLocaleString('pt-BR')}</p>
    </div>
  );
}
