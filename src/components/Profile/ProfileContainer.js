import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Profile from "./Profile";

const ProfileContainer = (props) => {
    const {id} = useParams();
    const [user, setUser] = useState(null)
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setUser(response.data);
            });
    }, [id])


    return (
        <Profile id={id} user={user}/>
    )
}

export default ProfileContainer