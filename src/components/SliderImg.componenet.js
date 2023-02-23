
import React, { useState } from 'react'
import data from '../api/data'


const SliderImg = () => {
    const [trueAnswer, setTrueAnswer] = useState(0);
    const [falseAnswer, setFalseAnswer] = useState(0);

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomObject = data[randomIndex];


    const Func1 = () => {
        if (randomObject.answer === true) {
            console.log(randomObject.answer);
            setTrueAnswer((prev) => prev = prev + 1)
        } else {
            (setFalseAnswer((prev) => prev = prev + 1));
            console.log(randomObject.answer);
        }
    };

    const Func2 = () => {
        if (randomObject.answer === false) {
            (setTrueAnswer((prev) => prev = prev + 1))
            console.log(randomObject.answer);


        } else {
            (setFalseAnswer((prev) => prev = prev + 1))
            console.log(randomObject.answer);

        }

    };

    console.log();
    return (
        <div className='slider-img-container'>
            <div className='emoji-container'>
                <div className='sad'>🙃 {falseAnswer}</div>
                <div className='smile'>🙂 {trueAnswer}</div>
            </div>

            <div>
                <img className="flag" src={randomObject.image} alt={randomObject.image} />
                <h1> {randomObject.description}</h1>
            </div>

            <div className='buttons-container'>
                <div className='button wrong' onClick={Func2} >✖️</div>
                <div className='button true' onClick={Func1}>✔️</div>
            </div>

        </div>
    )
}


export default SliderImg;