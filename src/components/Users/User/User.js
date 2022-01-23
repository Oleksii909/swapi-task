import React from "react";
import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const User = (props) => {
    let id = props.user.url.split('/')[5]
    return (
        <Card className="text-center mt-3 p-2">
            <NavLink to={`/profile/${id}`}>{props.user.name}</NavLink>
        </Card>
    )
}

export default User