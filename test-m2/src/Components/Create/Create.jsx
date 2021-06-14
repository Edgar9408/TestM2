import React, { useState, useContext } from 'react';
import { AppContext } from '../../Context/Context';
import './Create.css'

const Create = () => {
    const { createPublication } = useContext(AppContext);
    const date = new Date();
    const [input, setInput] = useState({
        tittle: "",
        createdDate: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
        updateDate: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
        shortDescription: "",
        longDescription: "",
        ubication: "",
        price: 0,
        stock: 1,
        latitudLongitud: "",
        postalCode: null,
        image: "http://4.bp.blogspot.com/-swDf6iZwYEI/VEuF81J45EI/AAAAAAAAALI/Gt70O-nT-dY/s1600/Sitio%2B1.jpg"
    });
    const [latLng, setLatLng] = useState({
        latitud: "",
        longitud: "",
    });
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
        createPublication(input)
    }

    return (
        <>
            <div className="card container-form br-3 mt-5 mb-5">
                <div className="card-header">
                    <h3>Crear Publicacion</h3>
                </div>
                <div className="card-body">
                    <form className="" onSubmit={(e) => handleSubmit(e, input)}>
                        <div className="form-group">
                            <label htmlFor="Titulo">Titulo</label>
                            <input type="text" className="form-control" name="tittle" onChange={(e) => handleInputChange(e)} id="Titulo" placeholder="Titulo" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shortDescription">Descripccion breve</label>
                            <textarea className="form-control" name="shortDescription" onChange={(e) => handleInputChange(e)} id="shortDescription" rows="2" required></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="longDescription">Descripccion completa</label>
                            <textarea className="form-control" name="longDescription" onChange={(e) => handleInputChange(e)} id="longDescription" rows="3" required></textarea>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label htmlFor="ubication">Ubicacion</label>
                            <input type="text" className="form-control" name="ubication" onChange={(e) => handleInputChange(e)} id="ubication" placeholder="Ubicacion" required />
                        </div>
                        <p className="sugestions">*Complete Latitud y Longitud para añadir la opcion para ver su terreno en Google Maps</p>
                        <div className="form-group d-flex justify-content-between">
                            <div>
                                <label htmlFor="latitud">Latitud</label>
                                <input type="text" className="form-control" name="latitud" onChange={(e) => handleLatChange(e)} id="latitud" placeholder="Latitud" />
                            </div>
                            <div>
                                <label htmlFor="longitud">Longitud</label>
                                <input type="text" className="form-control" name="longitud" onChange={(e) => handleLatChange(e)} id="longitud" placeholder="Longitud" />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label htmlFor="price">Precio</label>
                            <input type="number" className="form-control" name="price" onChange={(e) => handleInputChange(e)} id="price" placeholder="Precio" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="stock">Cantidad</label>
                            <input type="number" className="form-control" name="stock" onChange={(e) => handleInputChange(e)} id="stock" placeholder="Cantidad" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="postalCode">Codigo postal</label>
                            <input type="number" className="form-control" name="postalCode" onChange={(e) => handleInputChange(e)} id="postalCode" placeholder="Codigo postal" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Link Imagen</label>
                            <input type="url" className="form-control" name="image" onChange={(e) => handleInputChange(e)} id="image" placeholder="Link Imagen" />
                        </div>
                        <br></br>
                        <hr></hr>
                        <div className="d-flex justify-content-end">
                            <input type="submit" className="btn btn-primary" value="Crear Publicacion" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Create;
