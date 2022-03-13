import './Navbar.css';
import { Button } from '@mantine/core';
function Navbar () {
    return(
    <div className="navbar">
        <h1 className="title">Cinema</h1>

        <div className="buttons">
            <Button variant="light" size='md'>Login in</Button>
            <Button variant="light" color={'teal'} size='md'>Registrati</Button>
        </div>
    </div>)
}

export default Navbar;