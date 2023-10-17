
    import PropTypes from "prop-types";
import { Link } from "react-router-dom";

    const User = ({user}) => {
    const {name, username,email,address, id} = user;

    return (
      <div>
        <div className="border bg-slate-600 p-6 rounded-lg">
          <h2> Name:{name}</h2>
          <h4>
            Address: {address.street},<span> {address.city},</span>
            <span> {address.zipcode}</span>
          </h4>
          <h4>Username: {username}</h4>
          <p>Email: {email}</p>
          <Link className="text-red-500" to = {`/user/${id}`} >Show Details</Link>
        </div>
      </div>
    );
};

  User.propTypes = {
  user: PropTypes.object

}
export default User;