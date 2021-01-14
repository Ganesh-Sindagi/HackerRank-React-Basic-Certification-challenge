import React, { useState } from 'react';

function Slides({slides}) {
    console.log(slides);

    const [count, setCount] = useState(0);

    function handleRestart() {
        setCount(0);
        document.getElementById("button-restart").disabled = true;
        document.getElementById("prev-btn").disabled = true;
        document.getElementById("next-btn").disabled = false;
    }
    
    function handlePrev() {
        if(count===0) {
            document.getElementById("prev-btn").disabled = true;
            document.getElementById("next-btn").disabled = false; 
        } else {
            setCount(count - 1); 
        } 
    }

    function handleNext() {
        document.getElementById("prev-btn").disabled = false; 
        if(count===3) {
            document.getElementById("next-btn").disabled = true; 
        } else {
            setCount(count + 1);
        }
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={handleRestart}>Restart</button>
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
