import React from 'react';


export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="mb-2">Copyright &copy; MyTodoslist.com</p>
        <a href="https://github.com/vaibhavp7744" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" style={{ width: '40px', height: '40px' }} />
        </a>
      </div>
    </footer>
  );
}
