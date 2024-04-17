import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../styles/index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <header id="entete">
                <nav class="navbar navbar-expand-lg bg-warning h-100">
                    <div class="container-fluid px-5">
                        <a class="navbar-brand fs-2 fw-semibold px-2" href="/">GESTOPERS</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item px-2">
                                    <a class="nav-link fs-5 fw-medium" href="/dashboard">Tableau de bord</a>
                                </li>
                                <li class="nav-item px-2">
                                    <a class="nav-link fs-5 fw-medium" href="#">Departements</a>
                                </li>
                                <li class="nav-item px-2">
                                    <a class="nav-link fs-5 fw-medium" href="#">Permissions</a>
                                </li>
                                <li class="nav-item px-2">
                                    <a class="nav-link fs-5 fw-medium" href="/">
                                        <FontAwesomeIcon icon={faRightFromBracket} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header