import React, { useState, useEffect } from "react";
import { qoutesData } from '../../enum/index';

const SignUp: React.FC = () => {
    const [currentQuote, setCurrentQuote] = useState<string>("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomQuote = qoutesData.authQuotes[Math.floor(Math.random() * qoutesData.authQuotes.length)];
            setCurrentQuote(randomQuote);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex h-screen font-sans">
            <div className="flex items-center justify-center w-3/5 relative">
                <img 
                    className="absolute inset-0 w-full h-full object-cover blur-sm" 
                    src="https://img.freepik.com/premium-photo/border-sea-land-stones-mound-sand-water-top-aerila-view_165577-2814.jpg" 
                    alt="Scenic background" 
                />
                <h1 className="flex items-center justify-center text-center relative text-7xl text-white">
                    "WELL-COME"
                </h1>
                <p className="absolute bottom-[200px] text-2xl text-white text-center">{currentQuote}</p>
            </div>

            <div className="w-2/5 flex items-center justify-center bg-slate-200">
                <div className="w-80 bg-white p-8 shadow-lg rounded-md">
                    <form>
                        <h1 className="text-3xl font-bold text-gray-700 mb-4">Create an account</h1>
                        <p className="text-gray-500 mb-6">Enter your details below</p>

                        <div className="space-y-4">
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500" 
                            />
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500" 
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500" 
                            />
                        </div>

                        <div className="mt-6 space-y-3">
                            <button 
                                type="submit" 
                                className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
                                Create Account
                            </button>
                            <button 
                                type="button" 
                                className="w-full flex items-center justify-center bg-gray-100 text-gray-600 py-3 rounded-md border border-gray-300 hover:bg-gray-200 transition">
                                <img 
                                    src="https://img.icons8.com/color/16/000000/google-logo.png" 
                                    alt="Google Icon" 
                                    className="mr-2"
                                />
                                Sign Up with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
