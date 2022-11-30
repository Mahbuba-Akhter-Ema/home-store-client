import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/UseContext';

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const {createUser, googleLogIn} = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const select = form.select.value
        const password = form.password.value
    
        // console.log(name, email, password)
        createUser(email, password)
        .then(result => {
            toast.success('Successfully Created')
            navigate('/')
            saveUsers(name, email, select)
        })
        .catch(error => {
            toast.error(error.message)
        })
    };

    const handleGoogleSignIn = () => {
		googleLogIn()
		.then(result => {
			const user = result.user;
            saveUsers(user.displayName, user.email);
			navigate(from, { replace: true });
			console.log(user);
		})
		.catch(error => 
			console.error(error)
		);
	};

    const saveUsers = ( name, email, select) => {
        const user = {
             name, email, select
        }

        fetch('http://localhost:5000/position', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
  
            })
            .catch(error => console.error(error))
    };
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-800 text-gray-100 mx-auto m-8">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSignUp} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Username</label>
                        <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Your Email</label>
                        <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="form-control w-full text-black">
                            <label className="label">
                                <span className="label-text text-white">Select your position</span>

                            </label>
                            <select name='select' className="select select-bordered">
                                <option>Buyer</option>
                                <option>Seller</option>

                            </select>

                        </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        <div className="flex justify-end text-xs text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign Up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-400">Sign Up with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-400">Don't have an account?
                    <a rel="noopener noreferrer" href="#" className="underline text-gray-100">Login</a>
                </p>
        </div>
    );
};

export default SignUp;