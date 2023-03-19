import './App.css'
import React, {useState, useEffect} from "react"
import {TwitterShareButton, TwitterIcon} from "react-share"


export default function App() {
  const [quote, setQuote] = useState("");

    const getQuote = () => {
       fetch("https://type.fit/api/quotes").then(response => response.json()).then(data => {
  const randomNum = Math.floor(Math.random()*data.length);
setQuote(data[randomNum]);
  });
    }
  useState(getQuote, [])
  return (
    <div className="outer">
      <div className="inner">
      <p>{quote.text}</p>
        <div className="right">{quote.author}</div>
      <div className="horizontal">
        <div className="twitter">
        <TwitterShareButton title={"".concat(quote.text, " - ", quote.author)} url={'https://twitter.com'}>
<TwitterIcon size={32} round></TwitterIcon>
        
        </TwitterShareButton>
</div>
      <button onClick={getQuote}>New Quote</button>
  
      </div>
        </div>
    </div>
  )
}