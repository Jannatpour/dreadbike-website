import LegalLayout from '../components/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="PRIVACY POLICY" lastUpdated="January 1, 2025">
      <div className='space-y-8'>
        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>1. INTRODUCTION</h2>
          <p className='text-gray-300 leading-relaxed'>
            At DreadBike, we understand that your privacy is as important as the performance of your motorcycle. 
            This Privacy Policy explains how we collect, use, and protect your personal information when you 
            visit our website, use our services, or interact with our motorcycle tuning and modification services.
          </p>
          <p className='text-gray-300 leading-relaxed mt-4'>
            We are committed to maintaining the confidentiality of your personal data and ensuring that your 
            information is handled with the same precision and care we apply to our motorcycle modifications.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>2. INFORMATION WE COLLECT</h2>
          
          <h3 className='text-xl font-semibold text-orange-500 mb-3'>2.1 Personal Information</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            We collect information you provide directly to us, including:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Name, email address, and phone number</li>
            <li>Motorcycle make, model, year, and VIN</li>
            <li>Service preferences and modification requests</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Communication preferences and feedback</li>
          </ul>

          <h3 className='text-xl font-semibold text-orange-500 mb-3 mt-6'>2.2 Technical Information</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            We automatically collect certain technical information when you visit our website:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>IP address and browser information</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website information</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>3. HOW WE USE YOUR INFORMATION</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            We use your information to provide and improve our motorcycle services:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Process service requests and schedule appointments</li>
            <li>Provide motorcycle tuning and modification services</li>
            <li>Send service updates and maintenance reminders</li>
            <li>Process payments and manage billing</li>
            <li>Improve our website and services</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>4. INFORMATION SHARING</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            We do not sell, trade, or rent your personal information to third parties. We may share your 
            information only in the following circumstances:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>With service providers who assist in our operations (payment processors, hosting services)</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or merger</li>
            <li>With your explicit consent</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>5. DATA SECURITY</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            We implement industry-standard security measures to protect your personal information:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>SSL encryption for data transmission</li>
            <li>Secure servers and databases</li>
            <li>Regular security audits and updates</li>
            <li>Limited access to personal information</li>
            <li>Employee training on data protection</li>
          </ul>
          <p className='text-gray-300 leading-relaxed mt-4'>
            However, no method of transmission over the internet is 100% secure. While we strive to protect 
            your information, we cannot guarantee absolute security.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>6. COOKIES AND TRACKING</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            We use cookies and similar technologies to enhance your experience on our website:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
            <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
          </ul>
          <p className='text-gray-300 leading-relaxed mt-4'>
            You can control cookie settings through your browser preferences.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>7. YOUR RIGHTS</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            You have the following rights regarding your personal information:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal data</li>
            <li>Restrict processing of your data</li>
            <li>Data portability</li>
            <li>Object to processing</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className='text-gray-300 leading-relaxed mt-4'>
            To exercise these rights, contact us at privacy@dreadbike.com.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>8. DATA RETENTION</h2>
          <p className='text-gray-300 leading-relaxed'>
            We retain your personal information for as long as necessary to provide our services and 
            fulfill the purposes outlined in this policy. Service records and motorcycle information 
            may be retained for up to 7 years for warranty and legal compliance purposes.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>9. CHILDREN'S PRIVACY</h2>
          <p className='text-gray-300 leading-relaxed'>
            Our services are not directed to children under 16. We do not knowingly collect personal 
            information from children under 16. If we become aware that we have collected such information, 
            we will take steps to delete it promptly.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>10. INTERNATIONAL TRANSFERS</h2>
          <p className='text-gray-300 leading-relaxed'>
            Your information may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place to protect your information in accordance 
            with applicable data protection laws.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>11. CHANGES TO THIS POLICY</h2>
          <p className='text-gray-300 leading-relaxed'>
            We may update this Privacy Policy from time to time. We will notify you of any material 
            changes by posting the new policy on our website and updating the "Last Updated" date. 
            Your continued use of our services after such changes constitutes acceptance of the updated policy.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>12. CONTACT INFORMATION</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className='text-gray-300 space-y-2'>
            <p><strong>Email:</strong> privacy@dreadbike.com</p>
            <p><strong>Phone:</strong> +1 (666) DREAD-BIKE</p>
            <p><strong>Address:</strong> 13 Fear Street, Terror City, TC 66666</p>
          </div>
        </div>

        <div className='bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg p-6 border border-orange-500/30'>
          <h2 className='text-2xl font-bold text-orange-400 mb-4'>⚡ THE DREADBIKE COMMITMENT</h2>
          <p className='text-gray-300 leading-relaxed'>
            Just as we treat every motorcycle modification with precision and respect, we handle your 
            personal information with the same level of care and attention to detail. Your privacy is 
            not just a policy—it's our promise to you.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
