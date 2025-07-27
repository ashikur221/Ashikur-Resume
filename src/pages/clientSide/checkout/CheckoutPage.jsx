import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const CheckoutPage = () => {

  const axiosPublic = useAxiosPublic();


  const handleCreatePayment = () => {
    // e.preventDefault();
    console.log("hello")
    axiosPublic.post('/create-payment', {
      amount: 10000,
      currency: "USD",
    })
      .then((response) => {
        console.log(response);
        const redirectUrl = response.data.paymentUrl;

        if (redirectUrl) {
          window.location.replace(redirectUrl);
        }
      });
  };



  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Billing Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <div >
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your address"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2" htmlFor="city">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="City"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2" htmlFor="zip">
                    ZIP Code
                  </label>
                  <input
                    id="zip"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="ZIP"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="p-4 bg-gray-100 rounded-md">
              <div className="flex justify-between mb-2">
                <span>Product 1</span>
                <span>$25.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Product 2</span>
                <span>$40.00</span>
              </div>
              <div className="border-t border-gray-300 my-2"></div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$65.00</span>
              </div>
            </div>

            {/* Payment Details */}
            <h2 className="text-xl font-semibold mt-6 mb-4">Payment Details</h2>
            <div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2" htmlFor="card">
                  Card Number
                </label>
                <input
                  id="card"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2" htmlFor="expiry">
                    Expiry Date
                  </label>
                  <input
                    id="expiry"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2" htmlFor="cvc">
                    CVC
                  </label>
                  <input
                    id="cvc"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="CVC"
                  />
                </div>
              </div>
              <button onClick={handleCreatePayment} className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition">
                Complete Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
