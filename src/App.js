import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple Web Page</h1>
      </header>
      <main>
        <section>
          <h2>About This Page</h2>
          <p>This is a simple web page created using React. It demonstrates the basic structure of a React component.</p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Easy to understand</li>
            <li>Quick to set up</li>
            <li>Scalable for larger projects</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Simple Web Page</p>
      </footer>
    </div>
  );
}

export default App;
