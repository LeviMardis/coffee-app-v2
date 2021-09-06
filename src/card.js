import React, { useState } from "react";
import {Timer} from './timer.js'
import "./card.css";

export const Card = (props) => {



    return (
        <>
            <div>
                <div>
                    <p>{props.name}</p>
                    <p>Grams</p>
                </div>
                <div>

                </div>
                <Timer time={props.time} color={props.color} />
            </div>
            <div>

            </div>
        </>
    )
}