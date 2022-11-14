import React from 'react';
import './App.css';

function App() {
  const sites = [
    //
  ];

  return (
    <>
      <h1>epoch.tw</h1>
      <div>
        <ul>
          {
            sites.map((site) => (
              <li key={site.name}>
                <a href={site.link} target="_blank" rel="noreferrer">
                  { site.name }
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
