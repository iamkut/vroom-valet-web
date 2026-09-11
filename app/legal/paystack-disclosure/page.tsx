import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paystack payment disclosure',
  description: 'How Vroom Valet uses Paystack to process payments on behalf of operators.',
};

export default function PaystackDisclosurePage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-ink mb-2">Paystack payment disclosure</h1>
        <p className="text-ink-subtle text-sm mb-10">Last updated: October 2026</p>
        <div className="prose">
          <h2>How payments work</h2>
          <p>
            Where an operator has enabled online payment, Vroom Valet uses{' '}
            <a href="https://paystack.com" target="_blank" rel="noopener noreferrer">Paystack</a> to
            process card transactions. Paystack is a licensed payment service provider operating under
            the relevant South African financial regulations.
          </p>
          <h2>Who holds your card details</h2>
          <p>
            Vroom Valet never stores or has access to your raw card number, CVV, or expiry date.
            All card data is collected and tokenised directly by Paystack on their hosted checkout page.
          </p>
          <h2>Split payments</h2>
          <p>
            When you pay online, Paystack routes the operator&apos;s share directly to their registered
            bank account. A platform fee is deducted automatically by Paystack as part of the split
            payment arrangement. The full amount you pay is shown before you confirm — there are no
            additional charges applied after checkout.
          </p>
          <h2>Refunds</h2>
          <p>
            Refund eligibility depends on the operator&apos;s cancellation policy. For cancellations
            within the allowed window, refunds are processed back to the original payment method within
            5–10 business days. Paystack&apos;s standard fees are not refunded on cancelled transactions.
          </p>
          <h2>Questions</h2>
          <p>
            For payment-related questions, contact us at{' '}
            <a href="mailto:info@vroomvalet.co.za">info@vroomvalet.co.za</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
