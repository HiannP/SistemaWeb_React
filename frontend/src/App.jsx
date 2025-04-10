import { Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <Outlet />
      <footer className="footer">Este trabalho foi realizado por: Hiann Wonsowicz Padilha</footer>
    </div>
  );
}
