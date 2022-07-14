const express = require('express');
const path = require('path');
const app = express();

const stripe = require('stripe')(
  'sk_test_51L5xY5GQAnXJ0JEKipyVcR2IyoP5ECqTXhyRcSgxkGSiCunc3UFK2mtehvGpYtpCYnI57zf9S6ki82t36hyadpaT00q04YVOCW',
);
const cors = require('cors');

// Serve only the static files form the dist
// directory
const corsOptions = {
  allowedHeaders: ['Origin', 'Content-Type', 'Accept', 'Authorization'],

  origin: '*',

  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',

  preflightContinue: false,
};
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/build'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.post('/create-payment-intent', async (req, res) => {
  const i = req.body;
  console.log(i.amount);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 88500,
    // customer: items.lastName + ',' + items.firstName,
    // description: items.payFor,
    // receipt_email: items.email,
    payment_method: 'Card',
    currency: 'cad',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080, () => {
  console.log('The Server is listening on port 8080');
});
