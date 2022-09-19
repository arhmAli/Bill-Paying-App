import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';



const myContext = React.createContext();
class MyProvider extends Component {
    state = {
        stage: 1,
        players: [],
        result: ''
    }
    addNewPlayer = (name) => {
        this.setState((prevState) => ({
            players: [...prevState.players, name]
        }))
    }
    removePlayer = (index) => {
        let newArray = this.state.players;
        newArray.splice(index, 1)
        this.setState({ players: newArray })
    }
    nextHandler = () => {
        const { players } = this.state;
        if (players.length >= 2) {
            toast.success("You moved to stage two", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 2000
            })
            this.setState({
                stage: 2
            }, () => {
                setTimeout(() => {
                    this.generateLoser()
                }, 2000)
            })

        }
        else {
            toast.error("Not enough players", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 2000
            })
        }
    }
    generateLoser = () => {
        const { players } = this.state;
        this.setState({
            result: players[Math.floor(Math.random() * players.length)]

        })
    }
    reset = () => {
        this.setState({
            stage: 1,
            players: [],
            result: ''
        })
    }
    render() {
        return (<>
            <myContext.Provider value={
                {
                    state: this.state,
                    newPlayer: this.addNewPlayer,
                    removerPlayer: this.removePlayer,
                    next: this.nextHandler,
                    getNewLoser: this.generateLoser,
                    reset: this.reset
                }
            }>
                {this.props.children}
            </myContext.Provider>
            <ToastContainer />
        </>
        )
    }
}
export { myContext, MyProvider }
