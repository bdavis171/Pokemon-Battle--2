import React, { Component } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            metagross: {
                name: "Metagross",
                type1: "Steel",
                type2: "Psychic",
                hp: 301,
                attack: 306,
                defense: 296,
                sp_attack: 226,
                sp_defense: 216,
                speed: 176,
                weakness: ["Fire","Ground","Fighting","Bug","Dark","Ghost"],
                resistence: ["Normal","Flying","Rock","Bug","Steel","Grass","Psychic","Ice","Dragon","Fairy","Fighting","Psychic"],
                move1: {
                    name: "Ice Punch",
                    type: "Ice",
                    category: "Physical",
                    power: 75,
                    accuracy: 100
                },
                move2: {
                    name: "Meteor Mash",
                    type: "Steel",
                    category: "Physical",
                    power: 90,
                    accuracy: 90
                }, 
                move3: {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    category:"Physical",
                    power: 80,
                    accuracy: 90
                },
                move4: {
                    name: "Hammer Arm",
                    type: "Fighting",
                    category: "Physical",
                    power: 100,
                    accuracy: 90
                }
            },
            salamence: {
                name: "Salamence",
                type1: "Dragon",
                type2: "Flying",
                hp: 331,
                attack: 306,
                defense: 196,
                sp_attack: 256,
                sp_defense: 196,
                speed: 236,
                weakness: ["Dragon","Ice","Fairy","Electric","Ice","Rock"],
                resistence:["Fire","Water","Grass","Electric","Fighting","Bug","Grass"],
                move1: {
                    name: "Crunch",
                    type: "Dark",
                    category:"Physical",
                    power: 80,
                    accuracy: 100
                }, 
                move2: {
                    name: "Dragon Claw",
                    type: "Dragon",
                    category:"Physical",
                    power: 80,
                    accuracy: 100
                },
                move3: {
                    name: "Aqua Tail",
                    type: "Water",
                    category: "Physical",
                    power: 90,
                    accuracy: 90
                },
                move4: {
                    name: "Double-Edge",
                    type: "Normal",
                    category: "Physical",
                    power: 120,
                    accuracy: 100
                }
            }
         }
    }
    render() { 
        return ( 
            <div>
                <h1>Pokemon Battle #2</h1>
            </div>
         );
    }
}
 
export default AppContainer;