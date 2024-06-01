import {useState} from "react";

export default function Result({chosenTask}) {
    return (
        <div className="result-panel">
            <div className="result-label"><h2>You should go for:</h2></div>
            <div className="result"><h3 className="event-result">{chosenTask}</h3></div>
        </div>
    );
}