import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './Modal.css';

const animationTimeout={
    enter:300,
    exit:1000
}
const modal = (props) => {
    return(
    <CSSTransition
        in= {props.isOpen}
        timeout={animationTimeout}
        mountOnEnter
        unmountOnExit
        // classNames='fade-slide'
        classNames={{
            enter:'',
            enterActive: 'modalShow',
            exit:'',
            exitActive:'modalHide'
        }}
    >
        <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>
    </CSSTransition>
    )
};

export default modal;