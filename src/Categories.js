import {useState} from "react";
import PetHunting from "./PetHunting";
import Solo from "./Solo";
import MoneyMaking from "./MoneyMaking";
import Social from "./Social";
import PetHuntingContainer from "./PetHuntingContainer";
import MoneyMakingContainer from "./MoneyMakingContainer";
import SocialContainer from "./SocialContainer";
import SoloContainer from "./SoloContainer";

export default function Categories({chosenTask, setChosenTask, chosenGoal, setChosenGoal}) {

    return (
        <div className="categories">
            {chosenGoal === null ? <>
                    <PetHunting id={"pet-hunting"} chosenGoal={chosenGoal} setChosenGoal={setChosenGoal}/>
                    <MoneyMaking id={"money-making"} chosenGoal={chosenGoal} setChosenGoal={setChosenGoal}/>
                    <Social id={"social"} chosenGoal={chosenGoal} setChosenGoal={setChosenGoal}/>
                    <Solo id={"solo"} chosenGoal={chosenGoal} setChosenGoal={setChosenGoal}/></>
                :
                <>{chosenGoal === "pet-hunting" && <PetHuntingContainer id={"pet-hunting"} chosenTask={chosenTask} setChosenTask={setChosenTask} chosenGoal={chosenGoal} setChosenGoal={setChosenGoal}/>}
                  {chosenGoal === "money-making" && <MoneyMakingContainer id={"money-making"} chosenTask={chosenTask} setChosenTask={setChosenTask} chosenGoal={chosenGoal} setChosenGoal={setChosenGoal}/>}
                      {chosenGoal === "social" && <SocialContainer id={"social"} chosenTask={chosenTask} setChosenTask={setChosenTask} chosenGoal={chosenGoal} setChosenGoal={setChosenGoal}/>}
                      {chosenGoal === "solo" && <SoloContainer id={"solo"} chosenTask={chosenTask} setChosenTask={setChosenTask} chosenGoal={chosenGoal} setChosenGoal={setChosenGoal}/>}</>
            }
        </div>
    )
        ;
}