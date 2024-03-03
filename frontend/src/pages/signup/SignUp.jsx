const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-400"> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="label pt-4">
                            <span className="text-base label-text text-slate-400">Full Name</span>
                        </label>
                        <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text text-slate-400">Username</span>
                        </label>
                        <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text text-slate-400">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text text-slate-400">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" />
                    </div>

                    <GenderCheckbox />

                    <a href="#" className="text-sm text-slate-300 hover:underline hover:text-blue-300 mt-2 inline-block">
                        Already have an account?
                    </a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;