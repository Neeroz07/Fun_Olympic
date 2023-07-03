import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from './UsedInputs';
import Layout from '../Layout/Layout';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const setVal = (e) => {
    setEmail(e.target.value);
  };

  const sendLink = async (e) => {
    e.preventDefault();

    if (email === '') {
      toast.error('Email is required!', {
        position: 'top-center',
      });
    } else if (!email.includes('@')) {
      toast.warning('Include @ in your email!', {
        position: 'top-center',
      });
    } else {
      const res = await fetch('http://localhost:5000/sendpasswordlink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setEmail('');
        setMessage(true);
      } else {
        toast.error('Invalid User', {
          position: 'top-center',
        });
      }
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
      <h1 className="w-full text-text text-3xl text-center mb-6">Forgot Password</h1>
        <form
          onSubmit={sendLink}
          className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-Green  rounded-lg border border-border"
        >
          <div className="w-full">
            <Input
              label="Email"
              placeholder="olympic@gmail.com"
              type="email"
              name="email"
              value={email}
              onChange={setVal}
              bg={true}
            />
          </div>

          <button
            type="submit"
            className="bg-gold transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            {message ? 'Password Reset Link Sent' : 'Send'}
          </button>

          <p className="text-center text-text mt-4">
            <Link to="/" className="text-dryGray font-semibold">
              Back to Login
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default PasswordReset;
