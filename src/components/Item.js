import React, {} from "react";

function Item(props) {
    
    const datasender = (id)=>{
       props.ondelete(id);
    }

    return (
       
        props.value.map((data) => {
            return <h1>{data.value} <button onClick={()=>datasender(data.id)}>❌</button></h1>
        })
    );
}

export default Item;
