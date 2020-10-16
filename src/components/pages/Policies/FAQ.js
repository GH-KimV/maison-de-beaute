import React, { useState, useEffect } from 'react';
import faqData from '../../../util/data/faqData.json';

const FAQ = () => {
    const [faqNav, setFaqNav] = useState('general'),
        [clickedId, setClickedId] = useState(null),
        curFaqSelected = faqData[faqNav]

    useEffect(() => {
        const localData = localStorage.getItem('faqNav');
        if (localData) setFaqNav(JSON.parse(localData));
    }, [])

    useEffect(() => {
        localStorage.setItem('faqNav', JSON.stringify(faqNav));
    })

    const linkClickHandler = (e) => {
        setClickedId(null);
        setFaqNav(e.target.innerText.toLowerCase())
    }

    const revealAnswer = (idx) => {
        if (clickedId || clickedId === 0) {
            setClickedId(null);
        } else {
            setClickedId(idx);
        }
    };

    return (
        <div>
            <div className="faqNav">
                <h5 onClick={(e) => linkClickHandler(e)}>
                    General
                </h5>
                <h5 onClick={(e) => linkClickHandler(e)}>
                    Nails
                </h5>
                <h5 onClick={(e) => linkClickHandler(e)}>
                    Eyebrows
                </h5>
                <h5 onClick={(e) => linkClickHandler(e)}>
                    Wedding Planning
                </h5>
            </div>
            <div className="faqSwitch">
                <ul>
                    {
                        curFaqSelected.map((q, idx) => (
                            <div>
                                <li onClick={() => revealAnswer(idx)}>Question: {q.question}</li>
                                {
                                    clickedId == idx &&
                                    <li>Answer: {q.answer}</li>
                                }
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default FAQ;