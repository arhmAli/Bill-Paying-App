import React, { useContext } from "react";
import { myContext } from "../Context";
const Stage2 = () => {
    const context = useContext(myContext);
    return (
        <>
            <div className="App">
                <h3>The Loser is:</h3>
                <div>{context.state.result}</div>
            </div>
            <button onClick={() => context.reset()}>Start OVER</button>
            <button onClick={() => context.getNewLoser()}>Get new Loser</button>
        </>
    );
}

export default Stage2;
