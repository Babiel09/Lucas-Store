import React from 'react';
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h1>
                <form>
                    {/* Email Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 text-gray-700 text-sm"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center justify-center mt-6">
                    <span className="w-full h-px bg-gray-300"></span>
                    <span className="px-4 text-gray-500 text-sm">OR</span>
                    <span className="w-full h-px bg-gray-300"></span>
                </div>

                {/* Social Login */}
                <div className="mt-6 flex flex-col gap-4">
                    <button className="w-full flex items-center justify-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                        <FcGoogle size={30}/>
                        <br/>
                        Sign in with Google
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-gray-600 text-sm mt-8">
                    Don’t have an account?{' '}
                    <a
                        href="#"
                        className="text-blue-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
