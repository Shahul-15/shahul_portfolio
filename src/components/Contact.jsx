import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalData';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Replace 'YOUR_FORMSPREE_ID' with the form ID from your Formspree dashboard (e.g., 'xpqgarlo')
      const response = await fetch('https://formspree.io/f/xykqekry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent securely! I will get back to you shortly.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-red-600/5 blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-16">
        <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2">// Connect Inquiries</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Contact</h2>
        <div className="h-[2px] w-20 bg-red-600 mt-4 shadow-[0_0_10px_#ff2d2d]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Contact Info (Spans 2 columns) */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Let's build something data-driven</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 font-sans">
              I am open to data analyst trainee roles, internships, or ECE design opportunities. Feel free to reach out via the form, email, or social media handles.
            </p>

            <div className="flex flex-col gap-6">
              
              {/* Phone widget */}
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-red-500 group-hover:border-red-600/40 group-hover:bg-red-600/10 transition-all duration-300">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Phone Contact</span>
                  <a href={`tel:${personalData.contact.phone}`} className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                    {personalData.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email widget */}
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-red-500 group-hover:border-red-600/40 group-hover:bg-red-600/10 transition-all duration-300">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Email Address</span>
                  <a href={`mailto:${personalData.contact.email}`} className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                    {personalData.contact.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn widget */}
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-red-500 group-hover:border-red-600/40 group-hover:bg-red-600/10 transition-all duration-300">
                  <FiLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">LinkedIn Profile</span>
                  <a href={personalData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                    Thabre Alam Shahul Hameed
                  </a>
                </div>
              </div>

              {/* Location widget */}
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-red-500 group-hover:border-red-600/40 group-hover:bg-red-600/10 transition-all duration-300">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Institutional Location</span>
                  <a href="https://maps.app.goo.gl/UmfpG55mZBELtLct9" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                    UCE (BIT-Campus),Trichy
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Contact Form (Spans 3 columns) */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-white mb-2 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-600 rounded" />
              Send Secure Message
            </h3>
            {/* Input Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/10 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all font-sans"
                placeholder="e.g., Jane Doe"
              />
            </div>

            {/* Input Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/10 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all font-sans"
                placeholder="e.g., jane@example.com"
              />
            </div>

            {/* Input Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/10 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all font-sans resize-none"
                placeholder="Write your analytical requirements..."
              />
            </div>

            {/* Status Feedback */}
            {status.message && (
              <div className={`p-4 rounded-xl text-xs font-medium ${
                status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,45,45,0.2)] hover:shadow-[0_0_20px_rgba(255,45,45,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Send Message
                  <FiSend className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
