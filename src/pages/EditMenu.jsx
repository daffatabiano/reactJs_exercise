import axios from 'axios';
import { useState } from 'react';
const EditMenu = () => {
    const [edit, setEdit] = useState({
        name: '',
        description: '',
        urlImage: '',
        price: '',
        type: 'main-dish',
    });

    const handleChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("access_token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const payload = {
            name: edit.name,
            description: edit.description,
            imageUrl: edit.urlImage,
            price: parseInt(edit.price),
            type: edit.type,
        }
        
        axios
        .put(`https://api.mudoapi.tech/menu/${e.target.id}`, config, payload)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    };
    console.log(handleChange);
    console.log(handleSubmit);

    return (
        <div>
            <h1>Edit Menu</h1>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label htmlFor="">Description</label>
        <input type="text" name="description" onChange={handleChange} />
        <label htmlFor="">Url Image</label>
        <input type="text" name="urlImage" onChange={handleChange} />
        <label htmlFor="">Price</label>
        <input type="text" name="price" onChange={handleChange} />
        <select name="type" id="">
            <option value="main-dish">Main dish</option>
            <option value="side-dish">Side dish</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default EditMenu;