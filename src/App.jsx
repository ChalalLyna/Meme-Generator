import { useState, useEffect } from 'react'

import './App.css'

export default function App() {

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  async function getMeme(){
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    // Selecting a random meme from the array of memes
    const randomIndex = Math.floor(Math.random() * data.data.memes.length);
    const randomMeme = data.data.memes[randomIndex];
    
    setUrl(randomMeme.url);
    setName(randomMeme.name);
  }
  
  
  useEffect(function(){
    getMeme();
  }, []);


  return (
    <>
    <div className='container'>
      <h1>Random Meme Generator</h1>
      <Meme url={url} name={name} />
      <button onClick={getMeme}>Generate</button>
      
    </div>
    </>
  );
}

function Meme(props){
  return(
    <img src={props.url} alt={props.name} />
  );
}

