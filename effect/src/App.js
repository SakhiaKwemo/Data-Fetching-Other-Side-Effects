import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [title, setTitle] = useState("")

  useEffect(() => {
    document.title = title
  })

  // useEffect(() => {
  //   document.title = title
  // }, [title])

  return (
    <div className="App">
      <header className="App-header">
        <input value={title} onChange={(e) => {setTitle(e.target.value)}}/>
      </header>
    </div>
  );
}

export default App;
