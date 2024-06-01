export default function Social({id, chosenGoal, setChosenGoal}) {
    const isSelected = chosenGoal === id;


    function handleGoal() {
        setChosenGoal(isSelected ?  null : id);
    }
    return <div className="goal-container" onClick={handleGoal}>
        <h2>Social: Group content</h2>
    </div>
}