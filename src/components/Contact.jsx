import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Il nome è obbligatorio';
    if (!formData.lastName.trim()) newErrors.lastName = 'Il cognome è obbligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }
    if (!formData.message.trim()) newErrors.message = 'Il messaggio è obbligatorio';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('https://formspree.io/f/xnnjkwvr', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        });
        if (response.status === 200) {
          Swal.fire({
            title: 'Messaggio inviato!',
            text: 'Ti risponderò il prima possibile.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        }
      } catch (error) {
        Swal.fire({
          title: 'Errore!',
          text: 'Si è verificato un errore durante l\'invio del messaggio.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        console.error('Errore durante l\'invio del form:', error);
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-black bg-opacity-80">
      <div className="container mx-auto px-6">
        <h2 className="font-orbitron text-3xl font-bold text-gray-800 text-center text-white">Contattami</h2>
        <p className="font-inter mt-4 text-gray-600 text-center text-white">
          Compila il form qui sotto per inviarmi un messaggio. Ti risponderò il prima possibile!
        </p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
  {/* Nome e Cognome in due colonne */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    {/* Nome */}
    <div>
      <label htmlFor="firstName" className="block text-white font-inter text-sm font-medium text-gray-700">
        Nome <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className={`mt-1 block w-full px-4 py-2 border ${
          errors.firstName ? 'border-red-500' : 'border-gray-300'
        } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
      />
      {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
    </div>

    {/* Cognome */}
    <div>
      <label htmlFor="lastName" className="block text-white font-inter text-sm font-medium text-gray-700">
        Cognome <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className={`mt-1 block w-full px-4 py-2 border ${
          errors.lastName ? 'border-red-500' : 'border-gray-300'
        } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
      />
      {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
    </div>
  </div>

  {/* Email */}
  <div className="mb-4">
    <label htmlFor="email" className="block text-white font-inter text-sm font-medium text-gray-700">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className={`mt-1 block w-full px-4 py-2 border ${
        errors.email ? 'border-red-500' : 'border-gray-300'
      } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
    />
    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
  </div>

  {/* Telefono */}
  <div className="mb-4">
    <label htmlFor="phone" className="block text-white font-inter text-sm font-medium text-gray-700">
      Telefono
    </label>
    <input
      type="tel"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  {/* Messaggio */}
  <div className="mb-4">
    <label htmlFor="message" className="block text-white font-inter text-sm font-medium text-gray-700">
      Messaggio <span className="text-red-500">*</span>
    </label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows="4"
      className={`mt-1 block w-full px-4 py-2 border ${
        errors.message ? 'border-red-500' : 'border-gray-300'
      } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
    />
    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
  </div>

  {/* Bottone di invio */}
  <div className="mb-4 flex justify-center">
    <button
      type="submit"
      className="px-4 py-2 bg-white text-black font-semibold hover:bg-transparent hover:border hover:border-white hover:text-white transition duration-300"
    >
      Invia Messaggio
    </button>
  </div>
</form>
      </div>
    </section>
  );
};

export default Contact;