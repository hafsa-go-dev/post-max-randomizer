export default function MoneyMakingContainer({id, chosenTask, setChosenTask, chosenGoal, setChosenGoal}) {
    const isSelected = chosenGoal === id;

    const moneyMaking = [
        "Mining Amethyst",
        "Fishing Anglerfish",
        "Pickpocketing Elves",
        "Pickpocketing Vyrewatches",
        "Chambers of Xeric",
        "Tombs of Amascut",
        "GWD: Zilyana",
        "GWD: Bandos",
        "GWD: Armadyl",
        "GWD: Nex",
        "Zalcano",
        "Cutting Redwoods",
        "Cutting Magic Trees",
        "Smithing Rune Items",
        "Slayer",
        "Blood Runecrafting"
    ]

    let sortedTasks = moneyMaking.sort();

    function handleGoal() {
        setChosenGoal(isSelected ?  null : id);
    }

    function chooseTask() {
        setChosenTask(chosenTask => pickRandom())
    }

    function pickRandom() {
        let task = "";
        let randomIndex = Math.round(Math.random() * (sortedTasks.length - 1));
        task = sortedTasks[randomIndex];
        return task;
    }

    return <div className="goal-container-expanded">
        <div><h2>
            <button className="randomizer-button" onClick={chooseTask}>Randomize</button>
            Money making <span onClick={handleGoal}>❌</span></h2></div>
        <div className={"grid-container"}>
            {
                sortedTasks.map(task => (<div className={chosenTask === task ? "cell active" : "cell"}>{task}</div>))
            }
        </div>

    </div>
}