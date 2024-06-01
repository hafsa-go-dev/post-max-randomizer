export default function SoloContainer({id, chosenGoal, setChosenGoal, chosenTask, setChosenTask, }) {
    const isSelected = chosenGoal === id;

    const solo = [
        "Tombs of Amascut",
        "Barrows",
        "Callisto",
        "Chaos Elemental",
        "Chaos Fanatic",
        "Crazy Archaeologist",
        "Chambers of Xeric",
        "Corporeal Beast",
        "Commander Zilyana",
        "Gauntlet",
        "Dagannoth Kings",
        "Bandos",
        "Armadyl",
        "Zammy",
        "Perilous Moons",
        "Nex",
        "Scurrius",
        "Tempoross",
        "Zulrah"
    ]

    let sortedTasks = solo.sort();

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
            Solo achievements <span onClick={handleGoal}>❌</span></h2></div>
        <div className={"grid-container"}>
            {
                sortedTasks.map(task => (<div className={chosenTask === task ? "cell active" : "cell"}>{task}</div>))
            }
        </div>

    </div>
}