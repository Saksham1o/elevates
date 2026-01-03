import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle2, Globe, Mail, User, MessageSquare, Loader2 } from 'lucide-react';

const ActionCenter = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    setTimeout(() => containerRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const subject = 'Free Website Review — Elevates';
    const body = `
Name: ${form.name}
Email: ${form.email}
Website: ${form.website}

Message:
${form.message || 'No additional message'}
    `;

    window.location.href = `mailto:helloelevatesweb@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

      <div
        ref={containerRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900"
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-3xl font-extrabold text-slate-900">
              Get Your <span className="text-[#7F2CCB]">Free Website Review</span>
            </h3>

            <input
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded-xl"
            />

            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded-xl"
            />

            <input
              required
              type="url"
              placeholder="Website URL"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="w-full p-3 border rounded-xl"
            />

            <textarea
              placeholder="Anything specific?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 border rounded-xl"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#B8A8FF] py-3 rounded-xl font-bold"
            >
              {isLoading ? <Loader2 className="animate-spin mx-auto" /> : 'Send My Review'}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto text-green-500" size={48} />
            <h3 className="text-2xl font-bold">Request Sent!</h3>
            <p>I’ll get back to you within 24 hours.</p>
            <button onClick={onClose} className="px-6 py-2 bg-black text-white rounded-xl">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionCenter;