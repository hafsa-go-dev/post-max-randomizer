import {useState} from "react";
import Header from "./Header";
import Result from "./Result";
import MainScreen from "./MainScreen";

export default function App() {

    const [chosenTask, setChosenTask] = useState(null);

    const [chosenGoal, setChosenGoal] = useState(null);

    const intensity = [
        "High intensity - Skilling",
        "High intensity - PvM",
        "Low intensity - Skilling",
        "Low intensity - PvM",
    ]

    const goals = [
        "Pet-hunting",
        "Money-making",
        "Social: Group content",
        "Solo achievements"
    ]

    const moneyMaking = [
        "Mining Amethyst",
        "Fishing Anglerfish",
        "Pickpocketing Elves",
        "Pickpocketing Vyrewatches",
        "Chambers of Xeric",
        "Tombs of Amascut",
        "GWD: Zilyana",
        "GWD: Bandos",
        "GWD: Nex",
        "Zalcano",
        "Cutting Redwoods",
        "Cutting Magic Trees"
    ]

    const events = [
        "Tempoross",
        "Wintertodt",
        "Rooftop Agility",
        "Pyramid Plunder",
        "Perilous Moons",
        "Barrows",
        "Corporeal Beast",
        "Ape Atoll Agility Course",
        "Agility Pyramid",
        "Barbarian Outpost Agility Course",
        "Brimhaven Agility Arena",
        "GWD: Nex",
        "GWD: Zammy",
        "GWD: Bandos",
        "GWD: Zilyana",
        "GWD: Armadyl",
        "Dorgesh-Kaan Agility Course",
        "Gnome Ball",
        "Gnome Stronghold Agility Course",
        "Hallowed Sepulchre",
        "Penguin Agility Course",
        "Prifddinas Agility Course",
        "Shayzien Agility Course",
        "Werewolf Agility Course",
        "Werewolf Skullball",
        "Wilderness Agility Course",
        "Scorpia",
        "Vet'ion",
        "Calvar'ion",
        "Artio",
        "Callisto",
        "Venenatis",
        "Spindel",
        "Barbarian Assault",
        "Castle Wars",
        "Clan Wars",
        "Creature Creation",
        "Last Man Standing",
        "Pest Control",
        "Soul Wars",
        "TzHaar Fight Pit",
        "Blast Furnace",
        "Blast Mine",
        "Fishing Trawler",
        "Giant's Foundry",
        "Gnome Restaurant",
        "Guardians of the Rift",
        "Puro-Puro",
        "Mage Training Arena",
        "Rogue's Den",
        "Sorceress's Garden",
        "Tithe Farm",
        "Trouble Brewing",
        "Underwater Agility & Thieving",
        "Volcanic Mine",
        "Shades of Mort'ton",
        "Burthorpe Games Room",
        "Rat Pits",
        "Scurrius",
        "Giant Mole",
        "Deranged Archeologist",
        "Dagannoth Kings",
        "Sarachnis",
        "Kalphite Queen",
        "Chaos Fanatic",
        "Crazy Archaeologist",
        "King Black Dragon",
        "Chaos Elemental",
        "Revenant Maledictus",
        "Zalcano",
        "Theatre of Blood",
        "Chambers of Xeric",
        "Tombs of Amascut",
        "Anglerfishing",
        "Barbarian Fishing",
        "Motherlode Mine",
        "Shooting Stars",
        "Hunter's Rumours",
        "Woodcutting Guild",
        "Forestry",
        "Fishing Guild",
        "Red Chinchompa Hunting",
        "House Party (POH)",
        "ZMI Runecrafting",
        "Ectofuntus",
        "Wildy Resource Area Crabfishing",
        "Sand Crabs",
        "Falconry",
        "Herbiboar",
        "Ardy Knights",
        "Monkfishing",
        "Chompy Bird Hunting",
        "Brutal Black Dragons",
        "Infernal Eel Fishing",
        "Blackjacking",
        "Zeah Runecrafting",
        "Stealing Valuables",
        "Pickpocketing Wealthy Citizens",
        "Nightmare"
    ]



    const [chosenEvent, setChosenEvent] = useState("");

    function chooseEvent() {
        setChosenEvent((chosenEvent) => pickRandom());
    }

    function pickRandom() {
        let event = "";
        let randomIndex = Math.round(Math.random() * (events.length - 1));
        event = events[randomIndex];
        return event;
    }

    return (
        <div className="app">
            <Header />
            {chosenTask !== null ?
                <Result chosenTask={chosenTask}/> :
                <></>
            }
            <MainScreen chosenTask={chosenTask} chosenGoal={chosenGoal} setChosenGoal={setChosenGoal} setChosenTask={setChosenTask} />
        </div>
    );
}
