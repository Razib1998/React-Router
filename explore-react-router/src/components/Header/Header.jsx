import { Link, NavLink } from "react-router-dom";



const Header = () => {
    return (
      <div>
        <nav>
           <Link className="mr-6" to={'/'}>Home</Link>
           <Link className="mr-6" to={'/About'}>About</Link>
           <Link className="mr-6" to={'/Contact'}>Contact</Link>
           <NavLink  to = {'/Users'}
           activeClassName = "underline"
           >Users</NavLink>
           <NavLink  className= "ml-6" to = {'/Posts'}>Posts</NavLink>
           
        </nav>
      </div>
    );
};

export default Header;