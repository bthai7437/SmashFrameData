import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const CharacterList = props =>{
    console.log(props.characters);
    if (props.characters[0]){
        const images = props.characters.map( (image) => {
            return (
                <Col key={image.InstanceId} xs="auto" md="auto" xl="auto">
                    <Image rounded onClick={()=>console.log(image.Name)}  alt={image.name} src={image.ThumbnailUrl}/>
                </Col>
            );
        });

        return(<div><Row>{images}</Row></div>);
    }
    return <div>Loading</div>
}

export default CharacterList;