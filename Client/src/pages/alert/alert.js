import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TwilioSMS = () => {
  const [daysRemaining, setDaysRemaining] = useState({
    number1: 4,
    number2: 6,
    number3: 8,
    number4: 10,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Update remaining days and check if any number's remaining days is 2
      setDaysRemaining(prevState => {
        const updatedDaysRemaining = { ...prevState };
        Object.keys(updatedDaysRemaining).forEach(numberKey => {
          updatedDaysRemaining[numberKey] = prevState[numberKey] - 1;
          if (updatedDaysRemaining[numberKey] === 2) {
            const phoneNumber = getPhoneNumber(numberKey);
            const message = "Dummy text message";
            sendSMS(phoneNumber, message);
          }
        });
        return updatedDaysRemaining;
      });
    }, 10000); // Runs every 10 seconds
  
    return () => clearInterval(interval);
  }, []);

  const getPhoneNumber = numberKey => {
    // Replace with actual phone numbers
    switch (numberKey) {
      case 'number1':
        return '+919625205892';
      case 'number2':
        return '+919319800157';
      case 'number3':
        return '+919953640175';
      case 'number4':
        return '+918287073587';
      default:
        return '';
    }
  };

  const sendSMS = (phoneNumber, message) => {
    // Replace with your Twilio credentials and API endpoint
    const accountSid = 'ACd0e23d6f1eb055f3827350bdf98e829a';
    const authToken = '71b7fd6607d2b98469ae2120537432ee';
    const twilioNumber = '+17122170845';
    const apiUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    axios.post(
      apiUrl,
      {
        To: phoneNumber,
        From: twilioNumber,
        Body: message,
      },
      {
        auth: {
          username: accountSid,
          password: authToken,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then(response => {
      console.log('SMS sent successfully');
    })
    .catch(error => {
      console.error('Error sending SMS:', error);
    });
  };

  return (
    <div>
      <h1>Twilio SMS Sender</h1>
      <p>Remaining days:</p>
      <ul>
        {Object.keys(daysRemaining).map((numberKey, index) => (
          <li key={index}>
            {`Number ${index + 1}: ${daysRemaining[numberKey]} days`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwilioSMS;
