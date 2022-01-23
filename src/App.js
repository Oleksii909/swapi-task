import './App.css';
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App() {
    return (
        <div className='container pt-3'>
            <h1>Start Wars.</h1>
            <Routes>
                <Route path='/' element={ <UsersContainer /> } />
                <Route path='/profile/:id' element={ <ProfileContainer /> }/>
            </Routes>
        </div>
    );
}

export default App;
