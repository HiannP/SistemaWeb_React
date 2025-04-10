import React from 'react';
import '../styles/CreateOrEdit.css';

export default function UserForm({ form, onChange, onSubmit, isEditing }) {
  return (
    <form onSubmit={onSubmit} className="form-create-edit">
      <input name="nome" value={form.nome} onChange={onChange} placeholder="Nome" title="Nome" required />
      <input name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" title="Email" required />
      <input name="telefone" value={form.telefone} onChange={onChange} placeholder="Telefone" title="Telefone" required />
      <input name="data_nascimento" value={form.data_nascimento} onChange={onChange} type="date" title="Data de Nascimento" required />
      <input name="cpf" value={form.cpf} onChange={onChange} placeholder="CPF" title="CPF" required />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {isEditing ? 'Atualizar' : 'Cadastrar'}
      </button>
    </form>
  );
}
