// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from '../../lib/stripe'

export default async function handler(req, res) {
  const priceId = 'price_1MYwFWAJVAhWyOhxcCf1JSOY';

  const successUrl = `${process.env.NEXT_API_URL}/success`;
  const cancelUrl = `${process.env.NEXT_API_URL}/`;
  
  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
