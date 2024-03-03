import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const MenuDetail = () => {
  const [menu, setMenu] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getMenuDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${id}`)
      .then((res) => setMenu(res?.data?.data))
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
      .delete(`https://api.mudoapi.tech/menu/${id}`, config)
      .then((res) => {
        console.log(res);
        navigate("/menu");
      })
      .catch((err) => console.log(err?.response?.data?.message));
  }

  useEffect(() => {
    getMenuDetail();
  }, []);

  console.log(handleDelete);

  return (
    <div>
      <h1>Menu detail</h1>
      <button  onClick={handleDelete}>delete</button>
      <h1>nama menu : {menu?.name}</h1>
      <h1>deskripsi : {menu?.description}</h1>
      <img src={menu?.imageUrl} />
    </div>
  );
};

export default MenuDetail;
