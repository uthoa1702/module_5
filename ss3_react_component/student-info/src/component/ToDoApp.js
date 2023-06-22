import {Component} from "react";


export class ToDoApp extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            thingsToDo: ['homework']
        }
    }


    handleInputName = (value) => {
        this.setState({
                name: value
            }
        )
        console.log(this.state.name)

    }


    addThingToDo = () => {
        this.setState((previous) => ({
                thingsToDo: [previous.name, ...previous.thingsToDo],
                name: ''
            })
        )
    }


    render() {
        return (
            <>
                <input type="text" value={this.state.name}
                       onChange={((event) => this.handleInputName(event.target.value))}/>
                <button onClick={() => this.addThingToDo()}>
                    Add
                </button>
                <ul>
                    {
                        this.state.thingsToDo.map((thing, index) => (
                            <li key={index}>
                                {thing}
                            </li>

                        ))

                    }
                </ul>


            </>)
    }
}
