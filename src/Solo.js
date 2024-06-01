export default function Solo({id, chosenGoal, setChosenGoal}) {
    const isSelected = chosenGoal === id;


    function handleGoal() {
        setChosenGoal(isSelected ?  null : id);
    }
    return <div className="goal-container" onClick={handleGoal}>
        <h2>Solo achievements</h2>
    </div>
}