import React, { useState, useEffect } from 'react';

function Slides({slides}) {
    const [count, setCount] = useState(0);

    function handleRestart() {
        setCount(0);
        document.getElementById("res-btn").disabled = true;
        document.getElementById("prev-btn").disabled = true;
        document.getElementById("next-btn").disabled = false;
    }

    function handlePrev() {
        document.getElementById("next-btn").disabled = false; 
        if(count===1) {
            document.getElementById("res-btn").disabled = true;
            document.getElementById("prev-btn").disabled = true;
            document.getElementById("next-btn").disabled = false;
            setCount(0) 
        } else {
            setCount(count - 1); 
        } 
    }

    function handleNext() {
        document.getElementById("res-btn").disabled = false;
        document.getElementById("prev-btn").disabled = false; 
        if(count===4) {
            document.getElementById("next-btn").disabled = true;
            setCount(4) 
        } else {
            setCount(count + 1);
        }
    }

    useEffect(()=>{
        document.getElementById("res-btn").disabled = true;
        document.getElementById("prev-btn").disabled = true;
    }, [])
    return (
        <div>
            <div id="navigation" className="text-center">
                <button id="res-btn" data-testid="button-restart" className="small outlined" onClick={handleRestart}>Restart</button>
                <button id="prev-btn" data-testid="button-prev" className="small" onClick={handlePrev}>Prev</button>
                <button id="next-btn" data-testid="button-next" className="small" onClick={handleNext}>Next</button>
            </div>

            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[count].title}</h1>
                <p data-testid="text">{slides[count].text}</p>
            </div>
        </div>
    );

}

export default Slides;
