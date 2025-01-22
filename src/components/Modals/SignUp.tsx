"use client";

import {useState} from "react";

interface ModalProps{
    closeModal:()=>void;
}

export default function SignUpModal({closeModal}:ModalProps){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (

                <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 text-zinc-700">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
                        <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
                        <p className="text-gray-600 mb-6">Sign up to get started with our services.</p>

                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    placeholder="Create a password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg"
                            >
                                Sign Up
                            </button>
                        </form>

                        {/* Botão para fechar o modal */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
    );
};