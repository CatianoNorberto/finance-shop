import Stripe from 'stripe';

export const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
    appInfo:{
        name: 'finance',
    }
});
