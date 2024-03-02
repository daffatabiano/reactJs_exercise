import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to={"/"}>
        <p>Home</p>
      </Link>
      <Link to={"/menu"}>
        <p>Menu</p>
      </Link>
      <Link to={"/addMenu"}>
        <p>Add Menu</p>
      </Link>
    </div>
  );
};

export default Navbar;
