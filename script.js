const user = document.getElementById('user');
const button = document.getElementById('btn');
const userContainer = document.getElementById('user-container');
const requestMethod = document.getElementById('request-method');
const userName = document.getElementById('user-name');
const requestSelector = document.getElementById('requests-selector');
const apiURL = 'https://randomuser.me/api/';

//! Event listener
button.addEventListener('click', () => {
  const requestSelectorValue = requestSelector.value;
  console.log(requestSelectorValue);
  switch (requestSelectorValue) {
    case 'fetch':
      fetchInEventListener(apiURL);
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
function nodeGenerator(data, method) {
  requestMethod.innerText = `Request method: ${method}`;
  userName.innerText = `Request result: ${data}`;
}

// //? Version 1 (fetch request inside eventListener)

//! Event listener
const fetchInEventListener = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const userData = data.results[0].name.first;
      nodeGenerator(userData, 'Fetch in eventListener');
    });
};

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
    const userData = data.results[0].name.first;
    nodeGenerator(userData, 'Fetch - Helper Function');
  });
};

//? Version 3 (fetch request using async inside eventListener)

//! Event listener
const asyncFetch = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  const userData = data.results[0].name.first;
  nodeGenerator(userData, 'Fetch inside eventListener');
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
    const userData = data.results[0].name.first;
    nodeGenerator(userData, 'Fetch - Helper Function - Async');
  });
};

//? Version 5 (fetch request using AXIOS & async inside eventListener)

//! Event listener
const axiosRequest = async (url) => {
  const res = await axios.get(url);
  console.log('Log axios 1 :', res);
  const userData = res.data.results[0].name.first;
  console.log('Log axios 2 :', userData);
  nodeGenerator(userData, 'Axios inside eventListener');
};

//? Version 6 (fetch request with helper function using AXIOS & async)

//! Helper Function
const axiosData = async (url) => {
  const data = await axios.get(apiURL);
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
    const userData = data.data.results[0].name.first;
    console.log(userData);
    nodeGenerator(userData, 'Axios - Helper Function - Async');
  });
};

// //! Event listener
// button.addEventListener('click', requestList(apiURL));
