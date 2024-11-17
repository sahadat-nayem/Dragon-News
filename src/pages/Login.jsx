import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const {userLogin, setUser} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log({email, password});
        userLogin(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user);
        })
        .catch((error) => {
            alert(error.code);
        });
        
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0 p-10">
                <h2 className="text-2xl font-semibold text-center mt-10">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered bg-gray-100" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered bg-gray-100" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Dont’t Have An Account ? <Link to="/auth/register" className="text-red-500">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;