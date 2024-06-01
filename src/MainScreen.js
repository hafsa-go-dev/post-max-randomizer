import {useState} from "react";
import EventGrid from "./EventGrid";
import Categories from "./Categories";

export default function MainScreen({chosenTask, chosenGoal, setChosenGoal, setChosenTask}) {
    return (
        <div className="main-screen">
            <Categories chosenTask={chosenTask} setChosenTask={setChosenTask} chosenGoal={chosenGoal} setChosenGoal={setChosenGoal}/>

            {/*{chosenGoal !== null ?*/}
            {/*<div className="task-components">*/}
            {/*    {chosenGoal === "money-making" && <MoneyMakingContainer*/}
            {/*</div>*/}
            {/*}*/}

            {/*<EventGrid setChosenTask={setChosenTask}/>*/}
        </div>
    );
}