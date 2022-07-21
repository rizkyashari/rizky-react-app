import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="dark">
            <Container>
                <Nav.Link>LOGO</Nav.Link>
                <Nav.Link>MAGAZINE</Nav.Link>
                <Nav.Link>WPAP</Nav.Link>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar