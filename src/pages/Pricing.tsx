import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '0',
      features: [
        '50 email verifications per month',
        'Basic AI analysis',
        'Email safety score',
        'Community support'
      ]
    },
    {
      name: 'Pro',
      price: '29',
      features: [
        'Unlimited email verifications',
        'Advanced AI analysis',
        'Detailed threat assessment',
        'Priority support',
        'API access',
        'Team collaboration'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Everything in Pro',
        'Custom AI model training',
        'Dedicated account manager',
        'SLA guarantee',
        'Custom integration support',
        'Security awareness training'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 flex-1">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${tier.price}
                  </span>
                  {tier.price !== 'Custom' && <span className="text-base font-medium text-gray-500">/month</span>}
                </p>
                <button className="mt-8 w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700">
                  Get Started
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}