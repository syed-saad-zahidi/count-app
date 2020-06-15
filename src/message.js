import React  from 'react';

function Message(props){
    return(
    <h1>the value of variable count is : {props.counter}</h1>
    );
}

export default Message;