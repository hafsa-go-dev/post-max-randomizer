export default function PetHunting({id, chosenGoal, setChosenGoal}) {
    const isSelected = chosenGoal === id;


    function handleGoal() {
        setChosenGoal(isSelected ?  null : id);
    }
    return <div className="goal-container" onClick={handleGoal}>
        <h2>Pet hunting</h2>
    </div>
}