import './Navbar.css';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
function Navbar () {
    return(
    <div className="navbar">
       <h1 className="title">Cinema</h1>

        <div className="buttons">
            <Link to="login"><Button variant="light" size='md'>Login in</Button></Link>
            <Button variant="light" color={'teal'} size='md'>Registrati</Button>
        </div>
    </div>)
}

export default Navbar;