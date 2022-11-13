import './App.css'


function App() {
  const sites = [
    //
  ]

  return (
    <>
      <h1>epoch.tw</h1>
      <div>
        <ul>
          {
            sites.map((site, i) => (
              <li key={i}>
                <a href={site.link} target="_blank">
                  { site.name }
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
