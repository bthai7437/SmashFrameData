import React from "react";

const CharacterList = props =>{
    console.log("CLIST data")
    console.log(props.characters);
    if (props.characters[0]){
        const images = props.characters.map( (image) => {
            return (
                <button onClick={console.log("CLICK")}>
                    <img key={image.InstanceId} alt={image.name} src={image.ThumbnailUrl} />
                </button>
            );
        });

        return<div>{images}</div>
    }
    return <div>not loaded</div>
}

export default CharacterList;