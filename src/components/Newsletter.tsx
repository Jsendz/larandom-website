// components/Newsletter.tsx
"use client"



import { useState } from 'react';
import SubmitJSON from 'submitjson';

const sj = new SubmitJSON({
  apiKey: process.env.NEXT_PUBLIC_SUBMITJSON_API_KEY!,
  endpoint: process.env.NEXT_PUBLIC_SUBMITJSON_ENDPOINT!,
});

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const data = { email };
      const response = await sj.submit(data, {
        emailNotification: true,
        emailSubject: 'New Newsletter Signup',
      });

      if (response) {
        setSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      setError('There was an error. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md mx-auto">
      {submitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Thank you for subscribing!</h2>
          <p className="text-gray-600">You will receive our latest news and updates soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold">Subscribe to our newsletter</h2>
          <p className="text-gray-600">Stay updated with the latest news and offers.</p>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
