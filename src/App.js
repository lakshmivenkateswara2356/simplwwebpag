import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple Web Page</h1>
      </header>
      <main>
        <section>
          <h2>Enter Your Information</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>
        </section>
        <section>
          <h2>Your Information</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Simple Web Page</p>
      </footer>
    </div>
  );
}

export default App;
