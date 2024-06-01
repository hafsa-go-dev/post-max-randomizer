export default function SocialContainer({id, chosenGoal, chosenTask, setChosenTask, setChosenGoal}) {
    const isSelected = chosenGoal === id;

    const social = [
        "Tombs of Amascut",
        "Chambers of Xeric",
        "Chambers of Xeric: Challenge Mode",
        "Theatre of Blood",
        "Zalcano",
        "GWD: Bandos",
        "GWD: Zammy",
        "GWD: Nex",
        "GWD: Armadyl",
        "GWD: Zilyana",
        "Barbarian Assault",
        "Corporeal Beast"
    ]

    let sortedTasks = social.sort();

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
            Social: Group content <span onClick={handleGoal}>❌</span></h2></div>
        <div className={"grid-container"}>
            {
                sortedTasks.map(task => (<div className={chosenTask === task ? "cell active" : "cell"}>{task}</div>))
            }
        </div>

    </div>
}