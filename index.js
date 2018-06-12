const app = "I don't do much.";

// const token = '21b6e399bfe7c1c5499a860a03be3997ad92b42d'
// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));


fetch('https://api.github.com/user/repos').
  then(res => res.json()).
  then(json => console.log(json))