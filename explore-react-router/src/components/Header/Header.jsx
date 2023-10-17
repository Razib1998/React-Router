import { Link } from "react-router-dom";


const Header = () => {
    return (
      <div>
        <nav>
           <Link className="mr-6" to={'/'}>Home</Link>
           <Link className="mr-6" to={'/About'}>About</Link>
           <Link className="mr-6" to={'/Contact'}>Contact</Link>
           <Link to = {'/Users'}> Users</Link>
           <Link className="ml-6" to = {'/Posts'}>
            <button>Post</button>
           </Link>
        </nav>
      </div>
    );
};

export default Header;