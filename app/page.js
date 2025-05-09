// app/page.js
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Added for image optimization

// --- Icon Components ---
const CheckCircleIcon = ({ className = "w-6 h-6" }) => ( /* ... SVG ... */ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const LightBulbIcon = ({ className = "w-6 h-6" }) => ( /* ... SVG ... */ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3 .378A6.011 6.011 0 0112 12.75c-2.676 0-4.923.922-6.615 2.472m13.23 0A6.011 6.011 0 0012 12.75c-2.676 0-4.923.922-6.615 2.472M12 12.75a2.25 2.25 0 002.248-2.332A2.25 2.25 0 0012 8.25c-1.242 0-2.248 1.006-2.248 2.168M15.75 12.75c0 .073.005.146.014.217m-7.528 0c.01-.07.014-.144.014-.217M5.25 12.75c0 .073.005.146.014.217M18.75 12.75c0 .073.005.146.014.217M12 12.75c0 .073.005.146.014.217M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>);
const ShieldCheckIcon = ({ className = "w-6 h-6" }) => ( /* ... SVG ... */ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0-1.328 1.022-2.401 2.25-2.401S14.25 8.423 14.25 9.75v2.25c0 .806.67 1.464 1.479 1.409L17.25 12V9.75c0-2.87-2.355-5.25-5.25-5.25S6.75 6.88 6.75 9.75v6.75c0 .806.67 1.464 1.479 1.409L9.75 16.5V9.75z" /></svg>);
const SunIcon = ({ className = "w-6 h-6" }) => ( /* ... SVG ... */ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25c0 1.242 1.008 2.25 2.25 2.25s2.25-1.008 2.25-2.25A2.25 2.25 0 0012 12zm0 0a2.25 2.25 0 01-2.25-2.25c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25A2.25 2.25 0 0112 12z" /></svg>);
const MoonIcon = ({ className = "w-6 h-6" }) => ( /* ... SVG ... */ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21c1.789 0 3.467-.46 4.998-1.248l.004-.002z" /></svg>);
const ChatBubbleIcon = ({ className = "w-6 h-6" }) => ( /* ... SVG ... */ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.692-3.091c-.318-.264-.687-.45-1.084-.551A23.053 23.053 0 0112 15.75c-1.22 0-2.415.113-3.564.326-.397.101-.766.287-1.084.551l-3.692 3.091V17.25c-.34-.02-.68-.045-1.02-.072A2.102 2.102 0 013.75 15c0-.97.616-1.813 1.5-2.097m15 0c0-1.136-.847-2.1-1.98-2.193A23.053 23.053 0 0012 6c-1.22 0-2.415.113-3.564.326-.397.101-.766.287-1.084.551L3.75 9.75V6.75c0-1.136.847-2.1 1.98-2.193.34-.027.68-.052 1.02-.072V1.5L9.75 4.5c.318.264.687.45 1.084.551A23.053 23.053 0 0112 5.25c1.22 0 2.415-.113 3.564-.326.397.101-.766.287-1.084.551l3.692-3.091v3.091c.34.02.68.045 1.02.072A2.102 2.102 0 0120.25 6c0 .97-.616 1.813-1.5 2.097z" /></svg>);
const XMarkIcon = ({ className = "w-6 h-6" }) => ( /* ... SVG ... */ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>);
const PaperAirplaneIcon = ({ className = "w-5 h-5" }) => ( /* ... SVG ... */ <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}><path d="M3.105 3.105a.5.5 0 01.707-.001L19.5 9.5a.5.5 0 010 .998L3.812 16.9a.5.5 0 01-.707-.998L18.293 10 3.105 3.105z" /></svg>);

// --- Section Components ---
const HeroSection = () => (
  <section className="bg-gradient-to-br from-primary-DEFAULT to-blue-700 dark:from-gray-800 dark:to-gray-900 text-white section-padding min-h-[70vh] flex items-center justify-center">
    <div className="container mx-auto text-center animate-fade-in-up">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
        SoftSell: <span className="block sm:inline">Reclaim Value from Your Software</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Easily sell your unused software licenses or find incredible deals on pre-owned software. Secure, simple, and smart.
      </p>
      <a href="#contact" className="bg-secondary-DEFAULT hover:bg-secondary-dark text-white font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-xl inline-block">
        Get Started Now
      </a>
    </div>
  </section>
);

const HowItWorksSection = () => {
  const steps = [
    { id: 1, icon: '📝', title: 'List Your License', description: 'Create an account and list your unused software license with details and proof of ownership.' },
    { id: 2, icon: '🔍', title: 'Find a Buyer/Seller', description: 'Buyers browse listings, sellers get notified. We verify and facilitate the transaction.' },
    { id: 3, icon: '🤝', title: 'Secure Transfer', description: 'Once a deal is made, we ensure a secure transfer of the license and payment.' },
  ];
  return (
    <section id="how-it-works" className="section-padding bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">A simple 3-step process to buy or sell software licenses.</p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="text-5xl mb-6 text-primary-DEFAULT dark:text-primary-light mx-auto w-20 h-20 flex items-center justify-center bg-primary-light/10 dark:bg-primary-dark/20 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    { icon: <ShieldCheckIcon className="w-10 h-10 text-secondary-DEFAULT" />, title: 'Secure Transactions', description: 'We verify sellers and ensure all license transfers are legitimate and secure.' },
    { icon: <LightBulbIcon className="w-10 h-10 text-secondary-DEFAULT" />, title: 'Cost-Effective', description: 'Sellers recover costs, buyers get great software at lower prices.' },
    { icon: <CheckCircleIcon className="w-10 h-10 text-secondary-DEFAULT" />, title: 'Simple Process', description: 'Our platform makes listing, finding, and transacting licenses straightforward.' },
    { icon: '🌍', title: 'Wide Selection', description: 'Access a diverse marketplace of software licenses across various categories.' },
  ];
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Why Choose SoftSell?</h2>
        <p className="section-subtitle">Discover the benefits of our platform.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="mb-5 p-4 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/20">{typeof feature.icon === 'string' ? <span className="text-3xl">{feature.icon}</span> : feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { id: 1, name: 'Alice W.', role: 'Freelance Designer', review: 'SoftSell helped me recover costs from an expensive design suite I no longer needed. The process was surprisingly easy!', avatar: 'https://i.pravatar.cc/100?u=alice' },
    { id: 2, name: 'Bob T.', role: 'Startup Founder', review: 'Found a great deal on project management software for my team. Saved us a significant amount of money. Highly recommend!', avatar: 'https://i.pravatar.cc/100?u=bob' },
  ];
  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto">
        <h2 className="section-title">Loved by Users</h2>
        <p className="section-subtitle">Don&apos;t just take our word for it. Here&apos;s what our users say.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg animate-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-center mb-4">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  width={56} 
                  height={56} 
                  className="rounded-full mr-4 border-2 border-primary-light" 
                />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-primary-DEFAULT dark:text-primary-light">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">&quot;{testimonial.review}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactFormSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    else if (formData.message.trim().length < 10) tempErrors.message = "Message must be at least 10 characters long.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted (mock):", formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have questions or need support? Reach out to us!</p>
        
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 rounded-md text-center">
            Thank you for your message! We&apos;ll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white shadow-sm focus:border-primary-DEFAULT focus:ring focus:ring-primary-DEFAULT focus:ring-opacity-50 sm:text-sm ${errors.name ? 'border-red-500' : ''}`} />
            {errors.name && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white shadow-sm focus:border-primary-DEFAULT focus:ring focus:ring-primary-DEFAULT focus:ring-opacity-50 sm:text-sm ${errors.email ? 'border-red-500' : ''}`} />
            {errors.email && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white shadow-sm focus:border-primary-DEFAULT focus:ring focus:ring-primary-DEFAULT focus:ring-opacity-50 sm:text-sm ${errors.message ? 'border-red-500' : ''}`}
            ></textarea>
            {errors.message && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.message}</p>}
          </div>
          <div>
            <button type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-DEFAULT hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800 focus:ring-primary-light transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = ({ appName }) => (
  <footer className="bg-gray-100 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
      <p className="text-lg">© {new Date().getFullYear()} {appName}. All rights reserved.</p>
      <p className="text-sm mt-1">A Fictional Software Resale Startup Demo by a Skilled Frontend Developer.</p>
    </div>
  </footer>
);

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="fixed top-4 right-5 z-50 p-2.5 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:ring-offset-2 dark:focus:ring-offset-slate-900"
    aria-label="Toggle dark mode"
  >
    {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
  </button>
);

const AiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: `ai-${Date.now()}`, sender: 'ai', text: "Hello! I&apos;m SoftSell AI. How can I assist you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sampleQuestions = [
    "How do I sell my license?",
    "What are the fees for selling?",
    "Is it safe to buy software here?",
    "What kind of software can I find?",
    "Tell me about SoftSell.",
  ];

  const handleSampleQuestionClick = (question) => {
    setInputValue(question);
    const inputField = document.querySelector('.ai-chat-input');
    if (inputField) {
      inputField.focus();
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessageText = inputValue.trim();
    const newUserMessage = { id: `user-${Date.now()}`, sender: 'user', text: userMessageText };
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const historyToSend = [...messages, newUserMessage].map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          text: msg.text
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historyToSend }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API Error: ${response.status}`);
      }

      const data = await response.json();
      if (data.reply) {
        const aiResponseMessage = { id: `ai-${Date.now()}`, sender: 'ai', text: data.reply };
        setMessages(prevMessages => [...prevMessages, aiResponseMessage]);
      } else {
        throw new Error("Received no reply from AI.");
      }

    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = { 
        id: `error-${Date.now()}`, 
        sender: 'ai', 
        text: `Sorry, I couldn&apos;t connect to the AI assistant. ${error.message}`
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] bg-primary-DEFAULT hover:bg-primary-dark text-white p-3.5 sm:p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        aria-label={isOpen ? "Close AI Chat" : "Open AI Chat"}
      >
        {isOpen ? <XMarkIcon className="w-6 h-6"/> : <ChatBubbleIcon className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-[55] w-[calc(100vw-2rem)] max-w-sm sm:w-[360px] h-[calc(100vh-6rem)] max-h-[550px] sm:h-[550px] bg-white dark:bg-slate-800 rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-out transform origin-bottom-right animate-fade-in-up">
          <div className="flex justify-between items-center p-4 bg-primary-DEFAULT text-white rounded-t-xl">
            <h3 className="font-semibold text-lg">SoftSell AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 p-1 rounded-full hover:bg-white/20">
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto space-y-3 chat-scrollbar">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-secondary-DEFAULT text-white rounded-br-none' 
                    : 'bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                }`}>
                  {msg.text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < msg.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[75%] p-3 rounded-xl bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-bl-none animate-pulse-fast">
                  AI is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 2 && !isLoading && (
            <div className="p-3 border-t border-b border-gray-200 dark:border-slate-700 text-xs">
              <p className="font-semibold mb-1.5 text-gray-600 dark:text-gray-400">Or try asking:</p>
              <div className="flex flex-wrap gap-1.5">
                {sampleQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSampleQuestionClick(q)}
                    className="px-2 py-1 bg-gray-100 dark:bg-slate-600 hover:bg-gray-200 dark:hover:bg-slate-500 rounded-md text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSendMessage} className="p-3 sm:p-4 border-t border-gray-200 dark:border-slate-700 flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask something..."
              className="flex-grow p-3 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent outline-none text-sm ai-chat-input"
              disabled={isLoading}
              onKeyPress={(e) => { if (e.key === 'Enter' && !e.shiftKey && !isLoading) handleSendMessage(e);}}
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="p-3 bg-primary-DEFAULT text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(undefined);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialDarkMode;
    if (storedTheme === 'dark') {
      initialDarkMode = true;
    } else if (storedTheme === 'light') {
      initialDarkMode = false;
    } else {
      initialDarkMode = systemPrefersDark;
    }
    
    setIsDarkMode(initialDarkMode);

    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode === undefined) return;

    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const canRenderToggle = isDarkMode !== undefined;

  return (
    <>
      <Head>
        <title>SoftSell - Buy & Sell Software Licenses</title>
        <meta name="description" content="Marketplace for buying and selling pre-owned software licenses securely" />
      </Head>

      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-extrabold text-primary-DEFAULT dark:text-primary-light hover:opacity-80 transition-opacity">
            Soft<span className="text-secondary-DEFAULT">Sell</span>
          </a>
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            {['How It Works', 'Features', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary-DEFAULT dark:hover:text-primary-light font-medium transition-colors px-1.5 py-1 sm:px-2 rounded-md hover:bg-primary-DEFAULT/10 dark:hover:bg-primary-light/10"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactFormSection />
      </main>

      <Footer appName="SoftSell" />

      {canRenderToggle && <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
      <AiChatWidget />
    </>
  );
}