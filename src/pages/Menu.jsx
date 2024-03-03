import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  // const [status, setStatus] = useState("");
  const [paginate, setPaginate] = useState({
    perPage: 20,
    currentPage: 1,
    total: 0,
    previousPage: 0,
    nextPage: 0,
  })

  const getMenuData = () => { 
    axios
      .get(`https://api.mudoapi.tech/menus?page=${paginate.currentPage}`)
      .then((res) => {
        setPaginate({
          perPage : res.data.data.perPage,
          currentPage : res.data.data.currentPage,
          total : res.data.data.total,
          previousPage : res.data.data.previousPage,
          nextPage : res.data.data.nextPage,
        });
        setMenu(res.data.data.Data)})
      .catch((err) => console.log(err));
  };

  const handleBack = () => {
    setPaginate({
      ...paginate,
      currentPage: paginate.previousPage,
    });
  };

  const handleNext = () => {
    setPaginate({
      ...paginate,
      currentPage: paginate.nextPage,
    });
  };
  
 

  useEffect(() => {
    getMenuData();
  }, []);

  useEffect(() => {
    getMenuData();
  }, [paginate.currentPage]);

  return (
    <div className="container text-center">
      <Navbar />
      <h1>menu page</h1>
      {menu.map((item) => (
        <>
        <div className="row" key={item.id}>
          <h1 className="col">{item.name}</h1>
          <Link to={'/editmenu'}>
            <button >edit</button></Link>
            <p>{item.description}</p>
            <img width={"100px"} src={item.imageUrl} />
          <Link to={`/menu/${item.id}`}>
            <button>detail</button>
          </Link>
        </div>
          
        </>
      ))}
      <ul className="pagination">
        <li className="page-item">
      <button className="page-link" disabled={paginate.currentPage === 1} onClick={handleBack}>Back</button>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <button className="page-link">2</button>
    </li>
          <button className="page-link" disabled={!paginate.nextPage} onClick={handleNext}>Next</button>
      </ul>
    </div>
  );
};

export default Menu;
