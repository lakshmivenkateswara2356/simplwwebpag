import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="bg-blue-600 w-full text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to My Simple Web Page</h1>
      </header>
      <main className="flex flex-col items-center mt-8 w-full">
        <section className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Enter Your Information</h2>
          <form className="flex flex-col space-y-4">
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
          </form>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-lg mt-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Your Information</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </section>
      </main>
      <footer className="bg-blue-600 w-full text-white py-2 text-center mt-auto">
        <p>&copy; 2024 My Simple Web Page</p>
      </footer>
    </div>
  );
}

export default App;
