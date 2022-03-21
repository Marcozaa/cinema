import './Navbar.css';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
function Navbar () {
    return(
    <div className="navbar">
       <h1 className="title">Cinema</h1>

        <div className="buttons">
            <Link to="login"><Button variant="light" size='md'>Login in</Button></Link>
            <Link to="registrati"><Button variant="light" color={'teal'} size='md'>Registrati</Button></Link>
        </div>
    </div>)
}

export default Navbar;