import { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

const AddMenu = () => {
     const [menu, setMenu] = useState({
        name : "",
        description: "",
        urlImage: "",
        price: "",
        type: "main-dish",
     });
     const handleChange = (e) => {
        setMenu({
            ...menu,
            [e.target.name] : e.target.value,
        });
     };
     const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("access_token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }

        const payload = {
            name: menu.name,
            description: menu.description,
            imageUrl: menu.urlImage,
            price:parseInt(menu.price),
            type: menu.type,
        }

        axios
        .post("https://api.mudoapi.tech/menu",payload, config)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
     }

     console.log(menu);
    
  return (
    <div>
        <Navbar />
        <form action="" className='formAddMenu'>
        <label htmlFor=""> Name :</label>
        <input type="text" onChange={handleChange} name="name"/>
        <label htmlFor=""> Description: </label>
        <input type="text" onChange={handleChange} name='description' />
        <label htmlFor="">Url Image: </label>
        <input type="text" onChange={handleChange} name="urlImage"/>
        <label htmlFor="">Price: </label>
        <input type="text" onChange={handleChange} name= "price"/>
        <label htmlFor="">type</label>
        <select name="type" onChange={handleChange} id="">
            <option value="main-dish">makanan</option>
            <option value="beverage">minuman</option>
        </select>
        <button onClick={handleSubmit}>Enter</button>
        </form>
    </div>
  )
}

export default AddMenu;