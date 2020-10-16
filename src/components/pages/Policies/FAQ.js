import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import faqData from '../../../util/data/faqData.json';

const FAQ = () => {

    const [faqNav, setFaqNav] = useState('general')
    let curFaqSelected = faqData[faqNav]

    const linkClickHandler = (e) => {
        setFaqNav(e.target.innerText.toLowerCase())
    }

    const revealAnswer = (question) => {
        console.log(question.answer)
    }


    return (
        <div>
            <div className="faqNav">
                <Link onClick={(e) => linkClickHandler(e)}>
                    General
                </Link>
                <Link onClick={(e) => linkClickHandler(e)}>
                    Nails
                </Link>
                <Link onClick={(e) => linkClickHandler(e)}>
                    Eyebrows
                </Link>
                <Link onClick={(e) => linkClickHandler(e)}>
                    Wedding Planning
                </Link>
            </div>
            <div className="faqSwitch">
                <ul>
                    {
                        curFaqSelected.map(q => (
                            <li onClick={revealAnswer(q)}>{q.question}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default FAQ;