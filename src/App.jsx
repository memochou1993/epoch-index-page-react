import React from 'react';
import pages from './assets/pages.json';
import './App.css';

function App() {
  return (
    <>
      <h1>Index of https://epoch.tw/</h1>
      <div>
        <ul>
          {
            pages.map((page) => (
              <li key={page.link}>
                <a href={page.link} target="_blank" rel="noreferrer">
                  { page.label }
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
