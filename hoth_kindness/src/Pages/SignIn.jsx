import React from "react";
function SignIn({CiUser, CiLock}) {
    return <div className="form-container">
        <div class="flex justify-center items-center h-screen bg-indigo-600">
            <div class="w-96 p-6 shadow-1g bg-white rounded-md">
                <h1 class= "text-3x1 block text-center font-semibold">Login</h1>
                <form>
                <div className="form-control">
                    <label for="email" class="block text-base mb-2">Email </label>
                    <CiUser />
                    <input type="text" id="email" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email" />
                </div>

                <div className="form-control">
                    <label for="password" class="block text-base mb-2">Password</label>
                    <CiLock />
                    <input type="password" id="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password" />
                </div>
                <div>
                    <div>
                        <input type="checkbox">
                            <label>Remember Me?</label>
                        </input>
                    </div>
                </div>
                <button>Sign Up</button>
                </form>
                <p>Don't have an account? please sign up</p>
                <div class="mt-5">
                    <button class="borde-2 border-indigo-700 bg-indigo-700">Login</button>
                </div>
            </div>
        </div>
    </div>
}

export default SignIn