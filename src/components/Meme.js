import React from "react";

export default function Meme(){
    
    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState([])

    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImage(data.data.memes))
    })
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemeImage.length)
        const url = allMemeImage[randomNumber].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
    }

    function handleChange(event){
        const {name , value} = event.target
        setMeme(prevAllMemeImage => {
            return {
                ...prevAllMemeImage,
                [name] : value
            }
        })
    }
    return(
        <div>
            <div className = "form-div">
                <input type="text" name="topText" value={meme.topText} onChange={handleChange} placeholder="Top Text"/>
                <input type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} placeholder="Bottom Text"/>
                <button onClick={getMemeImage}>Generate a new meme </button> 
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bot">{meme.bottomText}</h2>
            </div>
        </div>
    )
}