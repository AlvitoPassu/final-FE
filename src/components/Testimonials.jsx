
import { useState, useEffect } from 'react';
import axios from 'axios';

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/testimonials')
        .then(response => {
            setTestimonials(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the testimonials!', error);
        });
    }, []);

    return (
        <section className="py-16 bg-linear-to-br from-indigo-50/20 to-purple-50/10 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden" id="testimonials">

        <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                Apa Kata{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                Mereka?
                </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
                Cerita sukses dari pengguna kami yang bahagia.
            </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
                <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-gray-100 dark:bg-gray-900 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
                >
                {/* Top accent bar */}
                <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{
                    background: "linear-gradient(90deg, #667eea, #764ba2)",
                    }}
                ></div>

                <div className="relative z-10">
                    {/* Quote icon */}
                    <div className="w-12 h-12 rounded-xl dark bg-gray-800 flex items-center justify-center mb-4 shadow-md bg-linear-to-br from-indigo-500 to-purple-500 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-xl">
                        format_quote
                    </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 italic">
                    {testimonial.text}
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t dark border-gray-100">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                        <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: "linear-gradient(135deg, #667eea, #764ba2)",
                            padding: "2px",
                        }}
                        >
                        <div className="w-full h-full dark:bg-gray-800 rounded-full overflow-hidden bg-white">
                            <img
                            alt={`Foto ${testimonial.name}`}
                            className="w-full h-full object-cover"
                            src={testimonial.image}
                            onError={(e) => {
                                e.target.src = "/assets/team/default-avatar.png";
                            }}
                            />
                        </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold dark:text-white text-gray-900 group-hover:text-indigo-700 transition-colors">
                        {testimonial.name}
                        </h4>
                        <p className="text-sm dark:text-gray-400 text-gray-600">{testimonial.role}</p>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

export default Testimonials;
