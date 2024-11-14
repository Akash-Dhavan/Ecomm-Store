import React from "react";

const SignUp: React.FC = () => {
    return (
        <>
            <div className="flex h-screen">
                <div className="flex w-3/5 bg-slate-400 text-white items-center justify-center">Log In Page</div>
                <div className="w-2/5 bg-slate-200">
                    <div className="flex flex-col w-80 items-center justify-center">
                    <form action="">
                    <h1 className="text-2xl m-4">Create an account</h1>
                    <h2 className="m-4">Enter your details below</h2>
                        <div className="flex flex-col p-4">
                        <input type="text" placeholder="Name" className="p-4 bg-slate-200"/>
                        <input type="text" placeholder="Email" className="p-4 bg-slate-200"/>
                            <input type="text" placeholder="Password" className="p-4 bg-slate-200" />
                            <button className="bg-orange-500 p-4 mt-2">Create Account</button>
                            <button className="bg-orange-500  p-4 mt-2">Sign Up with Google</button>
                        </div>
                    </form>
                        
                   </div>

                </div>
            </div>
        </>
    )
    
}
export default SignUp;