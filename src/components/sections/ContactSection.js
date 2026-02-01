'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! (This is a demo - no actual submission)');
    };

    return (
        <section id="contact" className="min-h-screen bg-gradient-to-br from-black via-purple-950/25 to-black py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">📧</div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Email</h4>
                                        <p className="text-purple-400">your.email@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">📱</div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Phone</h4>
                                        <p className="text-purple-400">+1 (234) 567-8900</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">📍</div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Location</h4>
                                        <p className="text-purple-400">City, Country</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-110 transition-all">
                                    in
                                </a>
                                <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-110 transition-all">
                                    𝕏
                                </a>
                                <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-110 transition-all">
                                    GH
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-purple-950/30 border border-purple-800/30 p-8 rounded-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-700/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-700/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-700/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500"
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-white font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-700/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all resize-none placeholder-gray-500"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
