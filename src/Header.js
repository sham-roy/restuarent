import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfG-Hrcj0rkJxGtoDPmv09NtFvHaLhH3xces1kOpBF1A&s"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Resofaura
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header