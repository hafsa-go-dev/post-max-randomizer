export default function MoneyMaking({id, chosenGoal, setChosenGoal}) {
    const isSelected = chosenGoal === id;


    function handleGoal() {
         setChosenGoal(isSelected ?  null : id);
    }
    return <div className="goal-container" onClick={handleGoal}>
        <h2>Money making</h2>
    </div>
}