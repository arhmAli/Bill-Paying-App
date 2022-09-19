import React, { Component } from 'react'
import { myContext } from './Context'
import Stage1 from './Components/stage1'
import 'react-toastify/dist/ReactToastify.css';
import Stage2 from './Components/stage2'
import './App.css'

class App extends Component {
  static contextType = myContext
  render() {
    return (
      <div className='wrapper'>
        <div className='center-wrapper'>
          <h1>Who Pays the Bill?</h1>
          {this.context.state.stage === 1 ?
            <Stage1 />
            :
            <Stage2 />
          }
        </div>
      </div>
    )
  }
}
export default App