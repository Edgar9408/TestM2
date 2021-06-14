import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import { AppContext } from '../../Context/Context';
import './styles.css';

const Card = (props) => {
    const { state, setState, deletePublication } = useContext(AppContext);
    const history = useHistory();
    const setUpdate = (props) => {
        console.log(props)
        setState({
            ...state,
            currentPublication: props
        })
        history.push(`/publications/update/${props.id}`)
    }
    return (
        <>
            <div className="card mb-3 mt-3">
                <img
                    className="card-img-top"
                    alt=""
                    src={props.image}
                    style={({ width: "100%" }, { height: "200px" })}
                />
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <h5 style={{ textTransform: "capitalize" }} className="Cardtittle"> {props.tittle} </h5>
                        <p className="card-text cardDescription"> {props.ubication} </p>
                        <p className="card-text"> ${props.price} </p>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary mt-2" onClick={()=>setUpdate(props) }>Editar</button>
                        <button className="btn btn-danger mt-2" onClick={() => deletePublication(props.id)}>Eliminar</button>
                        <Link to={`/${props.id}`} style={{ textDecoration: "none" }}>
                            <button className="btn btn-info mt-2">Ver detalles</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
