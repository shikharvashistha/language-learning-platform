import React from 'react'
import { Button } from 'react-bootstrap';

const header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Language Learning Platform</a>
                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/courses"> Explore
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/mycourses">My Courses</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Shridhar</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">My Profile</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Log Out</a>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
                            <Button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</Button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default header
