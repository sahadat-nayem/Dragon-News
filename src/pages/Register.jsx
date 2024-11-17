import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createNewUser, setUser} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        createNewUser(email, password,name,photo)
        .then(result =>{
            const user = result.user;
            setUser(user)
            console.log(user);
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            
        });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0 p-10">
                <h2 className="text-2xl font-semibold text-center mt-10">Register your account</h2>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter your name" className="input input-bordered bg-gray-100" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Enter your photo url" className="input input-bordered bg-gray-100" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered bg-gray-100" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Enter your password" className="input input-bordered bg-gray-100" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Already Have An Account ? <Link to="/auth/login" className="text-red-500">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;