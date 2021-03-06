import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = ["Backdrop", props.isOpen ? 'backDropShow':'backDropHide']
    return <div className={cssClasses.join(' ')}></div>
};

export default backdrop;