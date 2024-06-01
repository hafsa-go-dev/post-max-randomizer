export default function PetHuntingContainer({id, chosenTask, setChosenTask, chosenGoal, setChosenGoal}) {
    const isSelected = chosenGoal === id;

    const petHunting = [
        "Giant Mole",
        "Kalphite Queen",
        "Herbiboar",
        "King Black Dragon",
        "Tombs of Amascut",
        "Mining",
        "Agility",
        "Callisto",
        "Chaos Elemental",
        "Corporeal Beast",
        "Dagannoth Kings",
        "Jad",
        "Bandos",
        "Zammy",
        "Armadyl",
        "Scorpia",
        "Venenatis",
        "Vet'ion",
        "Vorkath",
        "Wintertodt",
        "Tempoross",
        "Zulrah",
        "Master Clues",
        "Barbarian Assault",
        "Chinchompas",
        "Farming",
        "Thieving",
        "Chompies",
        "Zalcano",
        "Gauntlet",
        "Nex",
        "Guardians of the Rift",
        "Scurrius"

    ]

    let sortedTasks = petHunting.sort();

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
            Pet hunting <span onClick={handleGoal}>❌</span></h2></div>
        <div className={"grid-container"}>
            {
                sortedTasks.map(task => (<div className={chosenTask === task ? "cell active" : "cell"}>{task}</div>))
            }
        </div>

    </div>
}