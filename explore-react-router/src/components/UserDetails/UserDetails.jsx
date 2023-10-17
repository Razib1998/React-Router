import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData()
    const {name,email,website} = user;
    return (
      <div>
        <div className="text-center">
          <h2>Here is the details for user </h2>
          <h1>Name: {name}</h1>
          <p>Email: {email}</p>
          <p>Website: {website}</p>
        </div>
      </div>
    );
};

export default UserDetails;