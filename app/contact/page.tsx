'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setStatus('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-red-500/30 w-full overflow-hidden pt-20">
      <section className="relative py-20 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Get in <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Have questions about our programs? We&apos;re here to help. Reach out to us.
          </p>
        </div>
      </section>

      <section className="py-10 pb-24 relative z-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {status && (
                <p
                  className={`text-sm ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}
                >
                  {status}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg px-8 text-base h-14 border-0 mt-4"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
