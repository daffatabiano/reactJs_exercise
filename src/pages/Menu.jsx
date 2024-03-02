import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const getMenuData = () => {
    const params = {
      perPage: 20,
    }
    axios
      .get("https://api.mudoapi.tech/menus", { params })
      .then((res) => setMenu(res.data.data.Data))
      .catch((err) => console.log(err));
  };
  const handleDelete = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    

    axios
      .delete(`https://api.mudoapi.tech/menu/${e.target.id}`, config)
      .then((res) => {
        console.log(res?.data.message);
      })
      .catch((err) => console.log(err?.response?.data?.message));
  }

  console.log(handleDelete);

  useEffect(() => {
    getMenuData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>menu page</h1>
      {menu.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <Link to={'/editmenu'}>
            <button >edit</button></Link>
          <button id={item.id} onClick={handleDelete}>delete</button>
            <p>{item.description}</p>
            <img width={"100px"} src={item.imageUrl} />
          <Link to={`/menu/${item.id}`}>
            <button>detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
