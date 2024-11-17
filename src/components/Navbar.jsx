import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    return (
        <div className="flex justify-between items-center">
            <div>
                {user && user.name}
            </div>
            <div className="space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? <button onClick={logOut} className="btn btn-neutral rounded-none">Log-out</button> : <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;