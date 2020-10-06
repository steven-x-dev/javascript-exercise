async function fetchData(url) {
  // <-- start
  try {
    const res = await fetch(url, {
      method: 'GET'
    });
    if (res.status === 200) {
      const body = await res.json();
      document.writeln(body.name);
    } else {
      document.writeln(res.statusText);
    }
  } catch (e) {
    console.log(e);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
