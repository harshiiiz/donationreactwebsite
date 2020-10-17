const cors = require("cors");
const express = require("express");

const stripe = require("stripe")("sk_test_51HXjNrLrNE9FvYCaBD8aIW0ewSFu0vnJuUpki9noy0G2KsOIH3KFgEgv2h6aRuhFj8c0qbMlCZviRZNBNuSY7sWv00btcgzWON");
const {v4: uuidv4}= require("uuid");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("IT WORKS ");
});


app.post("/checkout", (req, res) => {
  const { number, token } = req.body;
  console.log("AMOUNT ", number);

  const idempontencyKey = uuidv4();

  
 stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/success',
    cancel_url: 'https://localhost:3000/cancel',
    payment_method_types: ['card'],
    mode:'payment',
  
  })

  return stripe.customers
    .create({
      email: token.email,
      source: token.id
    })
    .then(customer => {
      stripe.charges.create(
        {
          amount: number * 100,
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
          
        },
        { idempontencyKey }
      );
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err));
    
});

app.listen(8282, () => console.log("LISTENING AT PORT 8282"));


 


