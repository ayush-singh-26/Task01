import React from 'react';

export const PricingTable = () => {
    const plans = [
        {
            title: 'Basic',
            price: '$19',
            features: ['1 User', '5 Projects', 'Basic Support'],
        },
        {
            title: 'Pro',
            price: '$49',
            features: ['5 Users', '25 Projects', 'Priority Support'],
            popular: true,
        },
        {
            title: 'Enterprise',
            price: '$99',
            features: ['Unlimited Users', 'Unlimited Projects', '24/7 Support'],
        },
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 shadow-lg flex flex-col justify-between border ${
                                plan.popular ? 'border-blue-600 bg-white' : 'border-gray-200 bg-white'
                            } ${plan.popular ? 'scale-105' : ''} transition-transform`}
                        >
                            {plan.popular && (
                                <div className="text-sm font-semibold text-blue-600 mb-4">Most Popular</div>
                            )}
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{plan.title}</h3>
                                <p className="text-4xl font-bold text-gray-900 mb-6">{plan.price}/mo</p>
                                <ul className="space-y-3 text-gray-700">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            ✅ <span className="ml-2">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
