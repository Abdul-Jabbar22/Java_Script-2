

// promises 


// GET https://icanhazdadjoke.com/


const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


const generateJokes = () => {

    const setHeader = ()=>{

        headers :{
            Accept : "application/json"
        }
    }
     
    fetch('https://icanhazdadjoke.com')
    .then((res) =>{
        console.log(rew.json());
    }).catch((error) =>{
        console.log(error);
    })
}