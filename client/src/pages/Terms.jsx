import React from "react";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to DreadNotes Merchandise. By accessing or using our website,
            you agree to comply with and be bound by the following terms and
            conditions. If you do not agree, please do not use our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Personal Information</h2>
          <p>
            When registering or making a purchase, we collect certain personal
            information including your:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Password (securely encrypted)</li>
          </ul>
          <p className="mt-2">
            This information is used strictly for account creation, order
            processing, communication, and delivery updates.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Custom Merchandise Orders</h2>
          <p>
            Our platform allows users to customize and order merchandise such as
            t-shirts, caps, and branded items. Once an order is placed:
          </p>
          <ol className="list-decimal pl-6 mt-2">
            <li>You will receive a confirmation message via email/SMS.</li>
            <li>We process and prepare your item within a short turnaround.</li>
            <li>Your item will be shipped to the address you provided.</li>
            <li>You will receive a delivery notification once it arrives.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials. If you suspect unauthorized activity, contact us
            immediately.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Payment & Pricing</h2>
          <p>
            All prices listed are in KES (or your selected currency). Payment is
            due at checkout. We accept various payment methods including M-PESA,
            debit/credit cards, and other secure gateways.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Returns & Refunds</h2>
          <p>
            Because our merchandise is custom-made, we do not accept returns
            unless the product is defective or a mistake occurred on our part.
            Refund requests must be made within 48 hours of receiving the product.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Data Protection</h2>
          <p>
            We value your privacy and take appropriate steps to protect your
            personal data. Your information will never be sold or shared with
            third parties without your consent.
            Please review our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a> for full details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Modification of Terms</h2>
          <p>
            DreadNotes reserves the right to update or modify these terms at any
            time. Changes will be posted on this page with an updated revision
            date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding these Terms, please
            contact us via:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Email: support@dreadnotes.co.ke</li>
            <li>Phone: +254 712 345 678</li>
          </ul>
        </div>
      </section>

      <p className="mt-10 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Terms;
