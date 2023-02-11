import { useEffect, useState } from 'react';
import Root from './components/Root';
import { getGitRepos, getRepoContributors, batchRequest } from './api/api';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
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
  
  // useEffect(() => {
  //   const batchPosts = async () => {
  //     const posts = await batchRequest(getRepoContributors, repos, 5);
  //     setPosts(posts);
  //   }
  //   batchPosts();
  // }, [repos]);
  console.log(posts);
  return (
    <div className="App">
      <Root repos={repos} />
    </div>
  );
}

export default App;
