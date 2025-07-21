import React from "react";

const PrivacyPolicy = () => (
  <div className="max-w-2xl mx-auto p-6 text-gray-800">
    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
    <p className="mb-2">Last updated: July 21, 2025</p>
    <p className="mb-4">This Privacy Policy explains how we collect, use, and protect your information when you use our Facebook automation tool ("the App").</p>
    <ol className="list-decimal pl-6 space-y-4">
      <li>
        <strong>Information We Collect</strong>
        <ul className="list-disc pl-6">
          <li>Your Facebook Page ID</li>
          <li>The ability to post content on your behalf</li>
        </ul>
        <p>We do not collect, store, or share any personal data beyond what's necessary to automate posts to your Facebook Page.</p>
      </li>
      <li>
        <strong>How We Use Information</strong>
        <p>The access granted is solely used to automate posting pre-generated content to your Facebook Page using the Graph API through our workflow automation system (n8n).</p>
      </li>
      <li>
        <strong>Data Security</strong>
        <p>We do not store access tokens or any personal data on our servers. All automation is handled securely via local workflows or trusted third-party platforms like n8n.</p>
      </li>
      <li>
        <strong>Third-Party Services</strong>
        <p>Our tool integrates with Facebook's API and may utilize other services such as n8n for automation. Please refer to their privacy policies as well.</p>
      </li>
      <li>
        <strong>Your Rights</strong>
        <p>You can revoke access at any time through your Facebook account settings.</p>
      </li>
      <li>
        <strong>Contact</strong>
        <p>If you have any questions, please contact us at <a href="mailto:samchuks898@gmail.com" className="text-blue-600 underline">samchuks898@gmail.com</a>.</p>
      </li>
    </ol>
  </div>
);

export default PrivacyPolicy; 