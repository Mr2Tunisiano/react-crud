import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/product">See All Products</Link>
          </li>
          <li>
            <a href="/">See All Categories</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
