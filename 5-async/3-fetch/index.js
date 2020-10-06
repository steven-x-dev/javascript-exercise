function fetchData(url) {
  // <-- start
  return fetch(url, {
    method: 'GET'
  })
    .then(response => {
      if (response.status === 200) return Promise.resolve(response.json());
      return Promise.reject(new Error(`${response.status} ${response.statusText}`));
    })
    .catch(err => {
      return Promise.reject(err);
    });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
