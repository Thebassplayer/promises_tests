const user = document.getElementById('user');
const button = document.getElementById('btn');
const userContainer = document.getElementById('user-container');
const requestMethod = document.getElementById('request-method');
const userName = document.getElementById('user-name');
const apiURL = 'https://randomuser.me/api/';

//! Node generator
function nodeGenerator(data, method) {
  requestMethod.innerText = `Request method: ${method}`;
  userName.innerText = `Request result: ${data}`;
}

// //? Version 1 (fetch request inside eventListener)

//! Event listener
button.addEventListener('click', () => {
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      const userData = data.results[0].name.first;
      nodeGenerator(userData, 'Fetch inside eventListener');
    });
});

// //? Version 2 (fetch request with helper function)

// //! Helper function
// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           resolve(data);
//         } else {
//           reject(err);
//         }
//       });
//   });
// }

// //! Event listener (With helper function <fetchData>)
// button.addEventListener('click', () => {
//   fetchData(apiURL).then((data) => {
//     const userData = data.results[0].name.first;
//     nodeGenerator(userData, 'Fetch - Helper Function');
//   });
// });

// //? Version 3 (fetch request using async inside eventListener)

// //! Event listener
// button.addEventListener('click', async () => {
//   const res = await fetch(apiURL);
//   const data = await res.json();
//   const userData = data.results[0].name.first;
//   nodeGenerator(userData, 'Fetch inside eventListener');
// });

// //? Version 4 (fetch request with helper function using async)

// //! Helper function
// const data = async (url) => {
//   const res = await fetch(url);
//   console.log('Log 1', res);
//   const data = await res.json();
//   console.log('Log 2 :', data);
//   return new Promise((resolve, reject) => {
//     if (data) {
//       resolve(data);
//     } else {
//       reject(err);
//     }
//   });
// };

// //! Event listener
// button.addEventListener('click', () => {
//   data(apiURL)
//     .then((data) => {
//       const userData = data.results[0].name.first;
//       nodeGenerator(userData, "Fetch - Helper Function - Async");
//     })
//     .catch(err);
// });

// //? Version 5 (fetch request using AXIOS & async inside eventListener)

// //! Event listener
// button.addEventListener('click', async () => {
//   const res = await axios.get(apiURL);
//   console.log('Log 2 :', res);
//   const userData = res.data.results[0].name.first;
//   console.log(userData);
//   nodeGenerator(userData, "Axios inside eventListener");
// });

// //? Version 6 (fetch request with helper function using AXIOS & async)

// //! Helper Function
// const axiosData = async (url) => {
//   const data = await axios.get(apiURL);
//   return new Promise((resolve, reject) => {
//     if (data) {
//       resolve(data);
//     } else {
//       reject(err);
//     }
//   });
// };

// //! Event listener
// button.addEventListener('click', () => {
//   axiosData(apiURL).then((data) => {
//     const userData = data.data.results[0].name.first;
//     console.log(userData);
//     nodeGenerator(userData, 'Axios - Helper Function - Async');
//   });
// });
