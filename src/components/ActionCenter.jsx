import React, { useEffect, useRef, useState } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const ActionCenter = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  // Lock scroll + focus modal
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    setTimeout(() => containerRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Single change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Firestore submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addDoc(collection(db, "leads"), {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        website: form.website.trim(),
        message: form.message.trim(),
        createdAt: serverTimestamp(),
        source: "free-website-review",
      });

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        website: "",
        message: "",
      });

    } catch (error) {
      console.error("Firestore Error:", error);
      alert("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={containerRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-2xl p-6 sm:p-8 md:p-12"
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
              Get Your{" "}
              <span className="text-[#7F2CCB]">Free Website Review</span>
            </h3>

            <input
              name="name"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <input
              name="email"
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <input
              name="website"
              required
              type="url"
              placeholder="Website URL"
              value={form.website}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <textarea
              name="message"
              placeholder="Anything specific?"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#B8A8FF] py-3 rounded-xl font-bold flex justify-center"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Send My Review"
              )}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto text-green-500" size={48} />
            <h3 className="text-2xl font-bold">Request Sent!</h3>
            <p>I’ll get back to you within 24 hours.</p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-black text-white rounded-xl"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionCenter;
