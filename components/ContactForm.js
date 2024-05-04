import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { BsArrowBarRight } from 'react-icons/bs';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_z00irau', 'template_2bddlsg', e.target, '_aW4PQZFDB06DM6PD');
      console.log('Email successfully sent!');
      // Handle success, e.g., display a success message
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error, e.g., display an error message
    }

    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 w-full mx-auto">
      {/* input group */}
      <div className="flex gap-x-6 w-full">
        <input
          type="text"
          name="user_name" // Updated name attribute
          placeholder="name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="user_email" // Updated name attribute
          placeholder="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input
        type="text"
        name="subject" // Updated name attribute
        placeholder="subject"
        className="input"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        name="message" // Updated name attribute
        placeholder="message"
        className="textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center overflow-hidden hover:border-accent group">
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          Let's talk😊
        </span>
        <BsArrowBarRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </button>
    </form>
  );
};

export default ContactForm;