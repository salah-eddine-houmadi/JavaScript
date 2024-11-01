
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));


fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));


fetch('https://api.github.com/users/bradtraversy')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.login));
