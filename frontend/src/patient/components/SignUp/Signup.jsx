import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    aadhaarNo: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const { name, email, address, phone, aadhaarNo, password, confirmPassword } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const errors = {};
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const res = await axios.post('https://medmitra.onrender.com/api/auth/register', formData);
      toast.success('Sign Up Successful!');
      console.log(res.data); // This would include the JWT token
      setFormData({
        name: '',
        email: '',
        address: '',
        phone: '',
        aadhaarNo: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error(err.response.data);
      toast.error(err.response.data.msg || 'An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">Sign Up</h1>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={onChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={onChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="aadhaarNo">Aadhaar No.</label>
            <input
              type="text"
              id="aadhaarNo"
              name="aadhaarNo"
              value={aadhaarNo}
              onChange={onChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              required
              className={`w-full border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
