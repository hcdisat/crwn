import React from "react";
import StripeCheckout from "react-stripe-checkout";

import config from "../../config";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = config.stripe.publishablekey;

  const onToken = token => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;
