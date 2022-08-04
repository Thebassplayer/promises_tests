const user = document.getElementById('user');
const button = document.getElementById('btn');
const userContainer = document.getElementById('user-container');
const userName = document.getElementById('user-name');
const apiURL = 'https://randomuser.me/api/';

//! Node generator
function nodeGenerator(data, element) {
  element.innerText = data;
}

//! Fetch data from API
button.addEventListener('click', () => {
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      const userData = data.results[0].name.first;
      nodeGenerator(userData, userName);
    });
});

//! Fetch data from API
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
//     nodeGenerator(userData, userName);
//   });
// });
