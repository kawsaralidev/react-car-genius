import React from 'react';
import mechanic1 from "../../../images/images/mechanic-1.jpg"
import mechanic2 from "../../../images/images/mechanic-2.jpg"
import mechanic3 from "../../../images/images/mechanic-3.jpg"
import mechanic4 from "../../../images/images/mechanic-4.jpg"
import Expart from '../Expart/Expart';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
]
const Exparts = () => {
    return (
        <div id="experts" className="container">
            <h1>This is our Exparts</h1>
            <div className="row">
                {
                    experts.map(expart => <Expart expart={expart}></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;