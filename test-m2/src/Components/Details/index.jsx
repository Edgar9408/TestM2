import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../Context/Context.js';
import './Details.css';

const Details = (id) => {
    const { state, getOnePublication } = useContext(AppContext);

    useEffect(() => {
        getOnePublication(id);
    }, [])

    return (
        <>
            {!state.currentPublication ? <div className="alert alert-warning" role="alert">No se pudo obtener informacion</div> :
                <div className="containercard mt-5">
                    <div className="detailsCard mb-1 mt-1">
                        <img
                            className="card-img-top img-details"
                            alt=""
                            src={state.currentPublication?.image}
                        />
                    </div>
                    <div className="card">
                        <div className="card-body CardText">
                            <h5 style={{ textTransform: "capitalize" }} className="tittle"> {state.currentPublication?.tittle} </h5>
                            {/* <p className="card-text"><b>Descripcion breve:</b> </p> */}
                            <p>{state.currentPublication?.shortDescription}</p>
                            <p className="card-text"><b>Descripcion:</b></p>
                            <p>{state.currentPublication?.longDescription}</p>
                            <div className="d-flex">
                                <p className="card-text"><b>Ubicacion:</b> &nbsp; {state.currentPublication?.ubication} &nbsp;&nbsp;  </p>
                                {state.currentPublication.latitudLongitud !== "" ? <a href={`https://maps.google.com/?q=${state.currentPublication.latitudLongitud}`} target="_blank">ver en Google Maps</a> : null}
                            </div>
                            <p className="card-text"><b>Precio:</b> &nbsp; ${state.currentPublication?.price} </p>
                            <p className="card-text"><b>Cantidad:</b> &nbsp; {state.currentPublication?.stock} </p>
                            <p className="card-text"><b>Codigo Postal:</b> &nbsp; {state.currentPublication?.postalCode} </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Details