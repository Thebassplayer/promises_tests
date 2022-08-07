const button = document.getElementById('btn'),
  userNameEl = document.getElementById('user-name'),
  requestSelector = document.getElementById('requests-selector'),
  apiURL = 'https://randomuser.me/api/';

//! Event listener
button.addEventListener('click', () => {
  const requestSelectorValue = requestSelector.value;

  switch (requestSelectorValue) {
    case 'fetch':
      fetchThenCatch(apiURL);
      break;
    case 'fetch-helper':
      fetchWithHelperFunc(apiURL);
      break;
    case 'async-fetch':
      asyncFetch(apiURL);
      break;
    case 'async-fetch-helper':
      asyncFetchInHelper(apiURL);
      break;
    case 'axios':
      axiosRequest(apiURL);
      break;
    case 'axios-helper':
      axiosWithHelper(apiURL);
      break;
    default:
      break;
  }
});

//! Node generator
function nodeGenerator(data) {
  userNameEl.innerText = `Request result: ${data}`;
}

// //? Version 1 (fetch with then() and catch() statements)

function fetchThenCatch(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const userName = data.results[0].name.first;
      nodeGenerator(userName);
    })
    .carch((err) => new Error(`Error Status: ${err}`));
}

//? Version 2 (fetch request with helper function)

//! Helper function
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          resolve(data);
        } else {
          reject(err);
        }
      });
  });
}

//! Event listener (With helper function <fetchData>)
const fetchWithHelperFunc = (url) => {
  fetchData(url).then((data) => {
    const userName = data.results[0].name.first;
    nodeGenerator(userName);
  });
};

//? Version 3 (fetch request using async inside eventListener)

//! Event listener
const asyncFetch = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  const userName = data.results[0].name.first;
  nodeGenerator(userName);
};

//? Version 4 (fetch request with helper function using async)

//! Helper function
const FetchAsyncdata = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject(err);
    }
  });
};

//! Event listener
const asyncFetchInHelper = (url) => {
  FetchAsyncdata(url).then((data) => {
    const userName = data.results[0].name.first;
    nodeGenerator(userName);
  });
};

//? Version 5 (fetch request using AXIOS & async inside eventListener)

//! Event listener
const axiosRequest = async (url) => {
  const res = await axios.get(url);
  const userName = res.data.results[0].name.first;
  nodeGenerator(userName);
};

//? Version 6 (fetch request with helper function using AXIOS & async)

//! Helper Function
const axiosData = async (url) => {
  const data = await axios.get(url);
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject(err);
    }
  });
};

//! Event listener
const axiosWithHelper = (url) => {
  axiosData(url).then((data) => {
    const userName = data.data.results[0].name.first;
    console.log(userName);
    nodeGenerator(userName);
  });
};

// //! Event listener
// button.addEventListener('click', requestList(apiURL));
