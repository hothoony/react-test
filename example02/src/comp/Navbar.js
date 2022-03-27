import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/create">New Blog</Link>
        </nav>
    );
}
 
export default Navbar;