const jokelist = document.querySelector("#jokes");
const button =  document.querySelector('button');

const addJoke = async() =>{
    const joke = await getJoke();
    const li = document.createElement('LI');
    li.append(joke);
    jokelist.append(li);
}

const getJoke = async () => {
    try{
        const config = {headers:{'Accept':'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        return res.data.joke;
    }catch(e){
        return "Sorry No Jokes Available :(";
    }
    
}

button.addEventListener('click',addJoke);