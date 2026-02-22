'use client';

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
            const res = await fetch(`${apiUrl}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.detail || 'Something went wrong. Please try again.');
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            setStatus('error');
            setErrorMsg(err.message);
        }
    };

    return (
        <section id="contact" className="min-h-screen bg-gradient-to-br from-black via-purple-950/25 to-black pt-24 pb-24">
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
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Email</h4>
                                        <p className="text-purple-400">sathruwanihapuarachchi7@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Phone</h4>
                                        <p className="text-purple-400">0778022449</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Location</h4>
                                        <p className="text-purple-400">No 147, Beruwewa, Kuliyapitiya</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/nethmi02/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-110 transition-all">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/nethmi02" target="_blank" rel="noopener noreferrer" title="GitHub" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-110 transition-all">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/sathruwaniii?igsh=d2NldnpnazNzN3Zp&utm_source=qr" target="_blank" rel="noopener noreferrer" title="Instagram" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-110 transition-all">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-purple-950/30 border border-purple-800/30 p-8 rounded-xl">

                        {/* Success banner */}
                        {status === 'success' && (
                            <div className="mb-6 flex items-start gap-3 bg-green-900/40 border border-green-500/40 text-green-300 px-4 py-3 rounded-lg text-sm">
                                <span className="text-lg"></span>
                                <p>Message sent! I&apos;ll get back to you as soon as possible.</p>
                            </div>
                        )}

                        {/* Error banner */}
                        {status === 'error' && (
                            <div className="mb-6 flex items-start gap-3 bg-red-900/40 border border-red-500/40 text-red-300 px-4 py-3 rounded-lg text-sm">
                                <span className="text-lg">❌</span>
                                <p>{errorMsg || 'Something went wrong. Please try again later.'}</p>
                            </div>
                        )}

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
                                    disabled={status === 'loading'}
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-700/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500 disabled:opacity-50"
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
                                    disabled={status === 'loading'}
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-700/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500 disabled:opacity-50"
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
                                    disabled={status === 'loading'}
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-700/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder-gray-500 disabled:opacity-50"
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
                                    disabled={status === 'loading'}
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-700/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all resize-none placeholder-gray-500 disabled:opacity-50"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
