import { useState } from "react"

export default function Team () {
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const newCount = team + 1;
        setTeam(newCount);
    }
    const handleReduce = () => {
        setTeam( team -1);
    }
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}