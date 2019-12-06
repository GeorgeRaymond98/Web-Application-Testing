import React from "react";


const Dashboard = (props) => {


return (
    <div>
        <button className="btn-style" onClick={props.strike}>Strike</button>
        <button className="btn-style" onClick={props.ball}>Ball</button>
        <button className="btn-style" onClick={props.hit}>Hit</button>
        <button className="btn-style" onClick={props.foul}>Foul</button>
    </div>
    )
}

export default Dashboard