import React, { useState, useEffect } from "react";

// Mock data for products
const productsData = [
  { name: 'General cleaning', price: 5500,add: false, dayPrice: false },
  { name: 'Laundry package (for 2 pers.)', price: 1300, add: false, dayPrice: false },
  { name: 'Highchair (per day)', price: 300, add: false, dayPrice: false },
  { name: 'Cot (per day)', price: 300, add: false, dayPrice: false},
  { name: 'Deposit', price: 10000, add: false, dayPrice: false },
  { name: 'Laundry package (for 3rd and 4th pers.)', price: 1900, add: false, dayPrice: false },
  { name: 'Booking', price: 1500, add: false, dayPrice: false },
];

// Input component for stay days
const Input = ({ value, onChange }) => (
<div className="flex items-center mt-8 mb-8"> 
  <label className="text-lg mx-2" htmlFor="days">Stay time:</label>
  <input
    style={{
      appearance: 'textfield', // General appearance removal
      MozAppearance: 'textfield', // Firefox
      WebkitAppearance: 'none', // Chrome, Safari, Edge, Opera
      margin: 0,
    }}
    className="border-2 border-indigo-400 font-semibold text-indigo-800 p-2 text-center text-sm rounded-lg"
    type="number"
    max="90"
    value={value}
    onChange={onChange}
    id="days"
  />
  <label className="text-lg mx-2" htmlFor="days">Days</label>
</div>

);

const Price = () => {
  const [products, setProducts] = useState(productsData);
  const [sum, setSum] = useState(5500);
  const [stayDays, setStayDays] = useState();

  // Update total sum whenever stayDays or selected products change
  useEffect(() => {
    let allItemsSum = 0;
    products.forEach(product => {
      const addPrice = product.price * (product.dayPrice ? stayDays : 1);
      if (product.add) {
        allItemsSum += addPrice;
      }
    });
    setSum(allItemsSum);
  }, [stayDays, products]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value >= 0 && value <= 90) {
      setStayDays(value);
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].add = !updatedProducts[index].add;
    setProducts(updatedProducts);
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-IN');
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 pt-16">
  <h2 className="text-center text-3xl mb-12">Additional services</h2>
      <div className="flex flex-wrap justify-between">
        <div className="mr-8 mb-4">
          <img
            className="transform scale-x-[-1]"
            src="https://github.com/OlgaKoplik/CodePen/blob/master/bg1.png?raw=true"
            alt="service"
          />
          <Input
            value={stayDays}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full lg:w-auto">
          <ul className="space-y-4">
            {products.map((product, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
              >
                <div className="flex items-center w-full">
                  <input
                    type="checkbox"
                    checked={product.add}
                    onChange={() => handleCheckboxChange(index)}
                    className="form-checkbox h-5 w-5 text-indigo-600 ml-4"
                  />
                  <div className="flex-1 ml-4"> {/* Add margin-left here */}
                    <div className={`font-semibold text-sm ${product.dayPrice ? 'text-indigo-600' : ''}`}>
                      {product.name}
                    </div>
                    <div className={`text-sm font-bold ${product.dayPrice ? 'text-indigo-600' : ''}`}>
                      ₹ {formatCurrency(product.price)}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-end items-center mt-8">
            <h3 className="text-sm uppercase font-semibold mr-4">Total:</h3>
            <span className="text-xl font-bold">₹ {formatCurrency(sum)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
