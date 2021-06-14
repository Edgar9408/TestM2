import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../Context/Context';
import './Update.css'

const Update = () => {
    const { state, updatePublication } = useContext(AppContext);
    const date = new Date();
    const [input, setInput] = useState({
        tittle: state.currentPublication?.tittle,
        createdAt: state.currentPublication?.createdAt,
        updatedAt: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
        shortDescription: state.currentPublication?.shortDescription,
        longDescription: state.currentPublication?.longDescription,
        ubication: state.currentPublication?.ubication,
        price: state.currentPublication?.price,
        stock: state.currentPublication?.stock,
        latitudLongitud: state.currentPublication?.latitudLongitud,
        postalCode: state.currentPublication?.postalCode,
        image: state.currentPublication?.image
    });
    const [latLng, setLatLng] = useState({
        latitud: "",
        longitud: "",
    });
    useEffect(() => {
        if (state.currentPublication.latitudLongitud !== "") {
            setLatLng({
                latitud: state.currentPublication.latitudLongitud.split(", ")[0],
                longitud: state.currentPublication.latitudLongitud.split(", ")[1],
            })
        }
    },[])
    const handleLatChange = (e) => {
        setLatLng({
            ...latLng,
            [e.target.name]: e.target.value
        })
    }
    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e, input) => {
        if (latLng.latitud !== "" && latLng.longitud !== "") {
            setInput({
                ...input,
                latitudLongitud: `${latLng.latitud}, ${latLng.longitud}`
            })
        }
        e.preventDefault();
        updatePublication(state.currentPublication.id, input);
    }

    return (
        <>
            {!state.currentPublication ? <div className="alert alert-warning" role="alert">No se pudo obtener informacion</div> :
                <div className="card container-form br-3 mt-5 mb-5">
                    <div className="card-header">
                        <h3>Editar Publicacion</h3>
                    </div>
                    <div className="card-body">
                        <form className="" onSubmit={(e) => handleSubmit(e, input)}>
                            <div className="form-group">
                                <label htmlFor="Titulo">Titulo</label>
                                <input type="text" className="form-control" name="tittle" onChange={(e) => handleInputChange(e)} value={input.tittle} id="Titulo" placeholder="Titulo" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shortDescription">Descripccion breve</label>
                                <textarea className="form-control" name="shortDescription" onChange={(e) => handleInputChange(e)} value={input.shortDescription} id="shortDescription" rows="2" required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="longDescription">Descripccion completa</label>
                                <textarea className="form-control" name="longDescription" onChange={(e) => handleInputChange(e)} value={input.longDescription} id="longDescription" rows="3" required></textarea>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="ubication">Ubicacion</label>
                                <input type="text" className="form-control" name="ubication" onChange={(e) => handleInputChange(e)} value={input.ubication} id="ubication" placeholder="Ubicacion" required />
                            </div>
                            <p className="sugestions">*Complete Latitud y Longitud para añadir la opcion para ver su terreno en Google Maps</p>
                            <div className="form-group d-flex justify-content-between">
                                <div>
                                    <label htmlFor="latitud">Latitud</label>
                                    <input type="number" className="form-control" name="latitud" onChange={(e) => handleLatChange(e)} value={latLng.latitud} max="100" id="latitud" placeholder="Latitud" />
                                </div>
                                <div>
                                    <label htmlFor="longitud">Longitud</label>
                                    <input type="number" className="form-control" name="longitud" onChange={(e) => handleLatChange(e)} value={latLng.longitud} max="100" id="longitud" placeholder="Longitud" />
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="price">Precio</label>
                                <input type="number" className="form-control" name="price" onChange={(e) => handleInputChange(e)} value={input.price} id="price" placeholder="Precio" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="stock">Cantidad</label>
                                <input type="number" className="form-control" name="stock" onChange={(e) => handleInputChange(e)} value={input.stock} id="stock" placeholder="Cantidad" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="postalCode">Codigo postal</label>
                                <input type="number" className="form-control" name="postalCode" onChange={(e) => handleInputChange(e)} value={input.postalCode} id="postalCode" placeholder="Codigo postal" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Link Imagen</label>
                                <input type="url" className="form-control" name="image" onChange={(e) => handleInputChange(e)} value={input.image} id="image" placeholder="Link Imagen" />
                            </div>
                            <br></br>
                            <hr></hr>
                            <div className="d-flex justify-content-end">
                                <input type="submit" className="btn btn-primary" value="Actualizar Publicacion" />
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    );
};

export default Update;