import { useEffect, useState } from 'react';
import Root from './components/Root';
import { getGitRepos } from './api/api';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const getRepos = async () => {
      try {
        const repos = await getGitRepos();
        setRepos(repos);
      } catch(e) {
        setError(e);
      } 
    }
    getRepos();
  }, [getGitRepos]);
  
  return (
    <div className="App">
      <Root repos={repos} />
    </div>
  );
}

export default App;
