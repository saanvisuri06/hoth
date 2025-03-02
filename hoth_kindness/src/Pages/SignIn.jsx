import React from "react";
function SignIn() {
    return <div className="form-container">
        <h2>Login</h2>
        <form>
            <div className="form-control">
                <input type="text" placeholder="Enter your email or user name" />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Enter your password" />
            </div>
            <button>Sign In</button>
        </form>
        <p>Don't have an account? please sign up</p>
    </div>
}

export default SignIn