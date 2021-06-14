import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';


export const AppContext = React.createContext();

const Provider = (props) => {
    const [state, setState] = useState({});
    const history = useHistory();

    const getPublications = async () => {
        let url = "http://localhost:3001/api/publications";
        await axios.get(url)
            .then(res => res.data)
            .then(data => {
                setState({
                    ...state,
                    publications: data.data
                });
            })
            .catch(e => {
                console.log(e)
                toast.error(e)
            })
    }

    const getOnePublication = async ({id}) => {
        let url = `http://localhost:3001/api/publications/${id}`;
        await axios.get(url)
            .then(res => res.data)
            .then(data => {
                setState({
                    ...state,
                    currentPublication: data
                })
            })
            .catch(e => {
                console.log(e)
                toast.error(e)
            })
    }

    const createPublication = async (input) =>{
        let url = "http://localhost:3001/api/publications";
        await axios.post(url, input)
        .then(res => res.data)
        .then(data => {
            toast.success('Publicación Creada')
            setState({
                ...state,
                publications: state.publications.concat(data.data)
            })
            history.push('/')
        })
        .catch(e => {
            console.log(e)
            toast.error(e)
        })
    }

    const deletePublication = async (id) => {
        let url = `http://localhost:3001/api/publications/${id}`;
        await axios.delete(url)
        .then(res => {
            toast.success('Publicación eliminada')
            setState({
                ...state,
                publications: state.publications.filter(p=>p.id !== id )
            })
        })
        .catch(e => {
            console.log(e)
            toast.error(e)
        })
    }

    const updatePublication = async (id, input) => {
        console.log(id)
        let url = `http://localhost:3001/api/publications/${id}`;
        await axios.put(url, input)
        .then(res => res.data)
        .then(data => {
            toast.success('Publicación actualizada')
            setState({
                ...state,
                publications: state.publications.filter(p=>p.id !== id )
            })
            history.push(`/${id}`)
        })
        .catch(e => {
            console.log(e)
            toast.error(e)
        })
    }

    return (
            <AppContext.Provider value={{ state, setState, getPublications, getOnePublication, createPublication, deletePublication, updatePublication }}>
                {props.children}
            </AppContext.Provider>
        )
    }



export default Provider