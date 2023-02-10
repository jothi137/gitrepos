
const default_header = {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'include', // include, *same-origin, omit
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  referrerPolicy: 'no-referrer',
};
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export const getGitRepos = () => fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json(), (error) => error);

export const getRepoContributors = (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return fetch(url).then((data) => data.json(), (error) => error);
}

export const batchRequest = async (api, data, limit) => {
  const result = [];
  const arrayLength = data.length;
  let batchPromises = [];
  while(result.length < data.length) {
    for (let index = 0; index < arrayLength; index += limit) {
      const myChunk = data.slice(index, index+limit);
      myChunk.forEach((post) => {
        batchPromises.push(getRepoContributors(post.id))
      });
      const resp = await Promise.all(batchPromises);
      result.push(...resp);
      batchPromises = [];
    }
  }
  return result;
}