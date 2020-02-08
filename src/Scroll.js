import React from 'react';

const Scroll = (props) => { //passing CardList as a prop
    return(
        <div style={{ overflow: 'scroll', height: '500px'}}>
            {props.children}    {/*props.children is the CardList */}
        </div>
    )

}

export default Scroll;