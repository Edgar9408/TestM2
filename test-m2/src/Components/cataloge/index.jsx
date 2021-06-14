import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../Context/Context';
import Card from "../Card/index.jsx";

const Cataloge = () => {
    const { state, getPublications } = useContext(AppContext);
    useEffect(() => {
        getPublications();
    }, [])

    return (
        <div>
            {!state.publications ? <div className="alert alert-warning" role="alert">No hay productos cargadas.</div> :
                <div className="container-fluid">
                    <div className="row justify-content-around">
                        {state.publications && state.publications.map(p =>
                            <div className="col-10 col-lg-5 col-sm-10" key={p.id}>
                                <Card
                                    id={p.id}
                                    tittle={p.tittle}
                                    createdDate={p.createdDate}
                                    updateDate={p.updateDate}
                                    shortDescription={p.shortDescription}
                                    longDescription={p.longDescription}
                                    ubication={p.ubication}
                                    price={p.price}
                                    stock={p.stock}
                                    postalCode={p.postalCode}
                                    latitudLongitud={p.latitudLongitud}
                                    image={p.image}
                                />
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default Cataloge
