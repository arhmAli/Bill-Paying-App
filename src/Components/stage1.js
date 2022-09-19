import React, { useRef, useContext, useState } from "react";
import { myContext } from "../Context";
import './stage1.scss'

const Stage1 = () => {
    const textInput = useRef();
    const context = useContext(myContext);
    const [error, setError] = useState([false, ''])

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        const validate = validateInput(value);
        validate ? console.log(value) : console.log("error")
        if (validate) {
            setError([false, ''])
            textInput.current.value = ''
            context.newPlayer(value)
        }
    }
    const validateInput = (value) => {
        if (value === '') {
            setError([true, "sorry you need to add something"]);
            return false;
        }
        if (value.length <= 2) {
            setError([true, "Sorry you need atleast five characters"]);
            return false
        }
        return true;

    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Player Name'
                    name='player'
                    ref={textInput}
                />
                <button>Add Player</button>

                {error[0] ?
                    <span>{error[1]} </span> :
                    null}
            </form>
            {context.state.players && context.state.players.length > 0 ?

                <>

                    <hr />
                    <ul>
                        {context.state.players.map((item, index) => (
                            <>
                                <li className="list-item" key={index}>{item}
                                    <span key={index} className="remover"
                                        onClick={() => context.removerPlayer(index)}
                                    >x</span>
                                </li>
                                <hr />
                                <div className="action_button" onClick={() => context.next()}>
                                    Next
                                </div>
                            </>
                        ))}
                    </ul>
                </>
                : null}

        </div>
    );
}

export default Stage1;
