// PricingPage.jsx
import React from "react";
import "./pricing.css"; // Assuming you have a CSS file for styling
import SectionTitle from "../sectionTitle"; // Import your SectionTitle component
const plans = [
  {
    title: "Student",
    price: "₹499/year",
    features: ["Access to all resources", "Monthly webinars", "Email support"],
    color: "bg-blue-100",
  },
  {
    title: "Graduate",
    price: "₹999/year",
    features: ["Everything in Student", "1:1 Mentorship", "Project reviews"],
    color: "bg-green-100",
  },
  {
    title: "Professional",
    price: "₹1999/year",
    features: ["All features", "Priority support", "Exclusive events"],
    color: "bg-purple-100",
  },
];

const PricingPage = () => {
  return (
    <div className="pricing  bg-gray-50 py-12 px-4 sm:px-5 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* <h2         className="text-4xl font-bold text-gray-800 mb-6">Membership Plans</h2> */}
        <SectionTitle
          title="Membership Plans"></SectionTitle>
        <p className="text-gray-600 mb-12">Choose a plan that suits your needs</p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 ${plan.color}`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-6">{plan.price}</p>
              <ul className="text-left text-gray-700 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
