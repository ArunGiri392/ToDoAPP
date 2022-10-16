import React, {} from "react";

function Item(props) {
    console.log(props);
    return (
       
        <h1>{props.value.value}</h1>
    );
}

export default Item;
