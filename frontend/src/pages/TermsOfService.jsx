import React from "react";

const TermsOfService = () => (
  <div className="max-w-2xl mx-auto p-6 text-gray-800">
    <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
    <p className="mb-2">Last updated: July 21, 2025</p>
    <p className="mb-4">These Terms govern your use of our Facebook automation tool ("the App"). By using the App, you agree to these terms.</p>
    <ol className="list-decimal pl-6 space-y-4">
      <li>
        <strong>Use of the App</strong>
        <p>The App is intended to help you automate the posting of content to your own Facebook Page using the Facebook Graph API.</p>
      </li>
      <li>
        <strong>User Responsibility</strong>
        <ul className="list-disc pl-6">
          <li>Complying with Facebook’s Platform Terms and Community Standards.</li>
          <li>Ensuring that posted content does not violate any laws or third-party rights.</li>
        </ul>
      </li>
      <li>
        <strong>Access and Security</strong>
        <p>You agree not to share or misuse access tokens or credentials. We are not liable for any unauthorized use.</p>
      </li>
      <li>
        <strong>Service Availability</strong>
        <p>We reserve the right to modify, suspend, or terminate the App at any time without notice.</p>
      </li>
      <li>
        <strong>Disclaimer</strong>
        <p>The App is provided "as is" without warranties of any kind. We are not liable for any damages arising from its use.</p>
      </li>
      <li>
        <strong>Changes</strong>
        <p>We may update these terms at any time. Continued use of the App constitutes acceptance of any changes.</p>
      </li>
      <li>
        <strong>Contact</strong>
        <p>If you have questions, contact us at <a href="mailto:your-email@example.com" className="text-blue-600 underline">your-email@example.com</a>.</p>
      </li>
    </ol>
  </div>
);

export default TermsOfService; 