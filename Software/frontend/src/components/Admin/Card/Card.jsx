import React from "react";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'
const Card = (props) => {
    return(
        <CompactCard param = {props}/>
    );
}

function CompactCard({param}){
    const Png = param.png;
    return(
        <div className="CompactCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}>
            <div className="card-title">

                <span>{param.title}</span>
            </div>

            <div className="detail">

                    <Png />

                <span>${param.value}</span>
                <span>Last 24 Hours</span>
            </div>


        </div>
    );
}

export default Card;