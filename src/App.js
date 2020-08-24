import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isOpen: false,
    isBlock: false
  }

  isOpenShow = () => {
    this.setState({
      isOpen : true
    })
  }

  isOpenClosed = () => {
    this.setState({
      isOpen : false
    })
  }
  
  render() {
    const animationTiming ={
      enter: 300,
      exit : 1000
    } 
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={()=>{
          this.setState(previousState=>({isBlock : !previousState.isBlock}))
        }}>Toogle</button>
        <br/>
        <Transition 
          in={this.state.isBlock} 
          timeout={animationTiming} 
          mountOnEnter 
          unmountOnExit
          onEnter={()=>{console.log('on enter')}}
          onEntering={()=>{console.log('on entering')}}
          onEntered={()=>{console.log('on entered')}}
          onExit={()=>{console.log('on exit')}}
          onExiting={()=>{console.log('on exiting')}}
          onExited={()=>{console.log('on exited')}}
          >
          {state=>(
            <div style={{
              backgroundColor:'red',
              height:100,
              width:100,
              margin:'auto',
              transition:'opacity 1000ms ease-out',
              opacity: state === 'exiting' ? 0 :1
            }}>         
            </div>
          )}
        </Transition>
        <Modal isOpen={this.state.isOpen} closed={this.isOpenClosed}/>
        {this.state.isOpen && <Backdrop isOpen={this.state.isOpen} closed={this.isOpenClosed}/>}
        <button className="Button" onClick = {this.isOpenShow}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
