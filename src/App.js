import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '' });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { name: '', email: '' };

    if (!name) {
      valid = false;
      newErrors.name = 'Name is required.';
    }

    if (!email) {
      valid = false;
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(email)) {
      valid = false;
      newErrors.email = 'Email is not valid.';
    }

    setErrors(newErrors);

    if (valid) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="bg-blue-600 w-full text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to My Simple Web Page</h1>
      </header>
      <main className="flex flex-col items-center mt-8 w-full">
        <section className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Enter Your Information</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value) {
                    setErrors(prev => ({ ...prev, name: '' }));
                  }
                }}
                className={`mt-1 p-2 border rounded-md w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (validateEmail(e.target.value)) {
                    setErrors(prev => ({ ...prev, email: '' }));
                  }
                }}
                className={`mt-1 p-2 border rounded-md w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300">
              Submit
            </button>
          </form>
          {submitted && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <p>Thank you, {name}! Your information has been submitted successfully.</p>
            </div>
          )}
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
