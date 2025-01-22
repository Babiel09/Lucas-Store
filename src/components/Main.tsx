import React from 'react';

const Main = () => {
    const featuredProducts = [
        { title: 'Sport Fishing', image: '/api/placeholder/300/200', price: 'Starting at $299' },
        { title: 'Deep Sea Fishing', image: '/api/placeholder/300/200', price: 'Starting at $499' },
        { title: 'Coastal Fishing', image: '/api/placeholder/300/200', price: 'Starting at $199' }
    ];

    const testimonials = [
        {
            text: "An incredible fishing experience I'll never forget!",
            author: "John Smith",
            role: "Amateur Fisherman"
        },
        {
            text: "Professional crew and top-notch equipment.",
            author: "Maria Garcia",
            role: "Fishing Enthusiast"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-zinc-700">
            {/* Hero Section */}
            <section className="relative h-screen">
                <div className="absolute inset-0 bg-gray-900/60">
                    <img
                        src="/api/placeholder/1920/1080"
                        alt="Fishing boat on ocean"
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>
                <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="text-white max-w-2xl">
                        <h1 className="text-5xl font-bold mb-6">Experience World-Class Fishing Adventures</h1>
                        <p className="text-xl mb-8">Join us for unforgettable fishing expeditions with professional guides and top-quality equipment</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg flex items-center">
                            Book Your Trip
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Popular Fishing Experiences</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map((product, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                    <p className="text-gray-600 mb-4">{product.price}</p>
                                    <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-8">
                                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                                    <div>
                                        <p className="font-semibold">{testimonial.author}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;