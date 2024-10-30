import React from 'react';

const Pricing1 = () => {
    return (
        <div className="text-center"> {/* Center aligns all content and headings */}
            <h1 className="text-3xl mb-4">PRICING</h1>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-400 mx-auto lg:w-4/5 w-full sm:w-11/12"> {/* Center aligns the table and makes it full-width */}
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Size</th>
                            <th className="border border-gray-400 px-4 py-2">1 hour</th>
                            <th className="border border-gray-400 px-4 py-2">3 hours</th>
                            <th className="border border-gray-400 px-4 py-2">5 hours</th>
                            <th className="border border-gray-400 px-4 py-2">8 hours</th>
                            <th className="border border-gray-400 px-4 py-2">12 hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">Small</td>
                            <td className="border border-gray-400 px-4 py-2">₹14</td>
                            <td className="border border-gray-400 px-4 py-2">₹35</td>
                            <td className="border border-gray-400 px-4 py-2">₹50</td>
                            <td className="border border-gray-400 px-4 py-2">₹80</td>
                            <td className="border border-gray-400 px-4 py-2">₹100</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">Medium</td>
                            <td className="border border-gray-400 px-4 py-2">₹20</td>
                            <td className="border border-gray-400 px-4 py-2">₹45</td>
                            <td className="border border-gray-400 px-4 py-2">₹75</td>
                            <td className="border border-gray-400 px-4 py-2">₹110</td>
                            <td className="border border-gray-400 px-4 py-2">₹150</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">Large</td>
                            <td className="border border-gray-400 px-4 py-2">₹50</td>
                            <td className="border border-gray-400 px-4 py-2">₹120</td>
                            <td className="border border-gray-400 px-4 py-2">₹175</td>
                            <td className="border border-gray-400 px-4 py-2">250</td>
                            <td className="border border-gray-400 px-4 py-2">325</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">X-Large</td>
                            <td className="border border-gray-400 px-4 py-2">₹80</td>
                            <td className="border border-gray-400 px-4 py-2">₹175</td>
                            <td className="border border-gray-400 px-4 py-2">₹250</td>
                            <td className="border border-gray-400 px-4 py-2">₹325</td>
                            <td className="border border-gray-400 px-4 py-2">₹450</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pricing1;
