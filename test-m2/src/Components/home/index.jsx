import React from 'react';
import { Link } from "react-router-dom";
import Cataloge from '../cataloge';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="d-flex mt-3">
                    <div className="m-3 col-lg-2 col-sm-11">
                        <h1>Catalogo de Publicaciones</h1>
                        <br></br>
                        <Link to={`/publications/create`} style={{ textDecoration: "none" }}>
                            <button className="btn btn-primary">Crear publicación</button>
                        </Link>
                    </div>
                    <div className="col-lg-9 col-sm-11">
                        <Cataloge></Cataloge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
