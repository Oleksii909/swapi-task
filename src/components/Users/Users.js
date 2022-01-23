import React, {useEffect} from "react";
import axios from "axios";
import User from "./User/User";
import {Row} from "react-bootstrap";

const Users = (props) => {
    const pageChangeHandler = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        axios.get(`https://swapi.dev/api/people?page=${pageNumber}`)
            .then(response => {
                props.setUsers(response.data.results);
            });
    }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people?page=${props.currentPage}`)
            .then(response => {
                props.setUsers(response.data.results);
                props.setTotalUsersCount(response.data.count);
            });
    }, [props.currentPage])

    /**
     * Construct Users components
     * @type {JSX[]}
     */
    const users = props.users.map((user, index) => {
        return (<User user={user}/>)
    })

    /**
     * Pager array constructor pointer
     */
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
    let pages = Array.from({ length: pagesCount });

    return (<>
        <h2>Users Page</h2>
        {pages.map( (p, i) => {
            return (<span
                className={props.currentPage === i+1 && 'fw-bold'}
                style={{cursor: 'pointer'}}
                onClick={(e) => { pageChangeHandler(i+1)} }>{i+1} </span>)
        })}
        <Row xs={1} md={2}>
            { users }
        </Row>
    </>)
}

export default Users