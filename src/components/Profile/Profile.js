import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";

const Profile = (props) => {
    if (!props.user) return <div><img src={'/loader.gif'}/></div>
    return (<>
            <NavLink to={'/'}>{'<-- Go back to users page'}</NavLink>
            <Card bg={'dark'} className="mt-2" text={'light'}>
                <Card.Header>User: {props.user.name}</Card.Header>
                <Card.Body>
                    <div>Height: {props.user.height}</div>
                    <div>Mass: {props.user.mass}</div>
                    <div>Hair color: {props.user.hair_color}</div>
                    <div>Skin color: {props.user.skin_color}</div>
                    <div>Eye color: {props.user.eye_color}</div>
                    <div>Birth year: {props.user.birth_year}</div>
                    <div>Gender: {props.user.gender}</div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Profile