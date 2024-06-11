import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the default styles

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="phone-input-container">
      <label htmlFor="phone-input">Phone Number:</label>
      <PhoneInput
        country={'us'} // Set the default country
        value={phoneNumber}
        onChange={(value) => setPhoneNumber(value)}
        inputStyle={{ width: '50%' }} // Customize the input style
      />
    </div>
  );
};

export default PhoneNumberInput;
