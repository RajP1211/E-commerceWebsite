import React, { useState } from 'react';

const PayPalButton = ({ amount, onsuccess, onError }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = () => {
    setPaymentStatus('Processing...');

    setTimeout(() => {
      const isSuccess = Math.random() > 0.3;

      if (isSuccess) {
        const fakeDetails = {
          transactionId: 'DUMMY_TXN_' + Math.floor(Math.random() * 100000),
          amount,
          payer: {
            name: 'Dummy User',
            email: 'dummy@example.com',
          },
          status: 'COMPLETED',
        };
        setPaymentStatus('Payment Successful ✅');
        onsuccess && onsuccess(fakeDetails);
      } else {
        setPaymentStatus('Payment Failed ❌');
        onError && onError(new Error('Dummy PayPal payment failed'));
      }
    }, 2000);
  };

  return (
    <div style={{ width:'100%' }}>
      {/* PayPal Button */}
      <button
        onClick={handlePayment}
        style={{
          width: '100%',
          backgroundColor: '#FFC439',
          color: '#111',
          fontWeight: 'bold',
          padding: '12px 0',
          borderRadius: '6px',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          marginBottom: '10px',
        }}
      >
        Pay with PayPal
      </button>

      {/* Debit/Credit Card Button */}
      <button
        onClick={handlePayment}
        style={{
          width: '100%',
          backgroundColor: '#0070BA',
          color: '#fff',
          fontWeight: 'bold',
          padding: '12px 0',
          borderRadius: '6px',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Debit or Credit Card
      </button>

      {/* Powered by PayPal */}
      <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px', color: '#666',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <span>Powered by</span>{' '}
        <img
          src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
          alt="Powered by PayPal"
          style={{ height: '14px', verticalAlign: 'middle' }}
        />
      </div>

      {/* Status Message */}
      {paymentStatus && (
        <p
          style={{
            marginTop: '12px',
            color: paymentStatus.includes('Failed') ? 'red' : 'green',
            fontWeight: 'bold',
          }}
        >
          {paymentStatus}
        </p>
      )}
    </div>
  );
};

export default PayPalButton;
