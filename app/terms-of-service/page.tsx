import LegalLayout from '../components/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="TERMS OF SERVICE" lastUpdated="January 1, 2025">
      <div className='space-y-8'>
        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>1. ACCEPTANCE OF TERMS</h2>
          <p className='text-gray-300 leading-relaxed'>
            Welcome to DreadBike. These Terms of Service (&quot;Terms&quot;) govern your use of our website, 
            services, and any motorcycle tuning, modification, or repair services we provide. By 
            accessing our website or using our services, you agree to be bound by these Terms.
          </p>
          <p className='text-gray-300 leading-relaxed mt-4'>
            If you do not agree to these Terms, please do not use our services. These Terms constitute 
            a legally binding agreement between you and DreadBike.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>2. SERVICES PROVIDED</h2>
          
          <h3 className='text-xl font-semibold text-orange-500 mb-3'>2.1 Motorcycle Services</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            DreadBike provides professional motorcycle services including:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Performance tuning and ECU remapping</li>
            <li>Custom modifications and upgrades</li>
            <li>Engine builds and rebuilds</li>
            <li>Suspension tuning and upgrades</li>
            <li>Exhaust system modifications</li>
            <li>Brake system enhancements</li>
            <li>Custom paint and graphics</li>
            <li>General maintenance and repairs</li>
          </ul>

          <h3 className='text-xl font-semibold text-orange-500 mb-3 mt-6'>2.2 Service Limitations</h3>
          <p className='text-gray-300 leading-relaxed'>
            All services are provided based on our professional assessment and industry standards. 
            Performance improvements are estimates and may vary based on motorcycle condition, 
            environmental factors, and other variables beyond our control.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>3. CUSTOMER RESPONSIBILITIES</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            As a customer, you are responsible for:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Providing accurate information about your motorcycle and service needs</li>
            <li>Ensuring your motorcycle is in safe condition for service</li>
            <li>Removing personal belongings before service</li>
            <li>Paying all fees and charges as agreed</li>
            <li>Following all safety recommendations and maintenance schedules</li>
            <li>Complying with local laws and regulations regarding modified motorcycles</li>
            <li>Obtaining necessary insurance coverage for modified vehicles</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>4. PAYMENT TERMS</h2>
          
          <h3 className='text-xl font-semibold text-orange-500 mb-3'>4.1 Pricing and Estimates</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            All prices are subject to change without notice. Service estimates are provided in good faith 
            but may vary based on actual work required. Additional charges may apply for:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Unexpected repairs or modifications discovered during service</li>
            <li>Additional parts or materials required</li>
            <li>Extended labor time due to complications</li>
            <li>Rush service requests</li>
          </ul>

          <h3 className='text-xl font-semibold text-orange-500 mb-3 mt-6'>4.2 Payment Methods</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            We accept various payment methods including cash, credit cards, and bank transfers. 
            Payment is due upon completion of services unless other arrangements are made in writing.
          </p>

          <h3 className='text-xl font-semibold text-orange-500 mb-3 mt-6'>4.3 Late Payments</h3>
          <p className='text-gray-300 leading-relaxed'>
            Late payments may incur additional charges. We reserve the right to hold motorcycles 
            until payment is received in full.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>5. WARRANTIES AND DISCLAIMERS</h2>
          
          <h3 className='text-xl font-semibold text-orange-500 mb-3'>5.1 Service Warranty</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            We provide a limited warranty on our workmanship for 90 days from service completion. 
            This warranty covers defects in workmanship but does not cover:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Normal wear and tear</li>
            <li>Damage from accidents or misuse</li>
            <li>Pre-existing conditions</li>
            <li>Parts not supplied by DreadBike</li>
            <li>Modifications made by others after our service</li>
          </ul>

          <h3 className='text-xl font-semibold text-orange-500 mb-3 mt-6'>5.2 Performance Guarantees</h3>
          <p className='text-gray-300 leading-relaxed'>
            While we strive for optimal performance, we cannot guarantee specific performance gains. 
            Results may vary based on motorcycle condition, riding style, and environmental factors.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>6. LIABILITY LIMITATIONS</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            To the maximum extent permitted by law, DreadBike&apos;s liability is limited as follows:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Our total liability shall not exceed the amount paid for the specific service</li>
            <li>We are not liable for consequential, indirect, or punitive damages</li>
            <li>We are not responsible for damage caused by customer misuse or modifications</li>
            <li>We are not liable for delays due to parts availability or other factors beyond our control</li>
            <li>Customer assumes all risks associated with motorcycle modifications</li>
          </ul>
          <p className='text-gray-300 leading-relaxed mt-4'>
            Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>7. INDEMNIFICATION</h2>
          <p className='text-gray-300 leading-relaxed'>
            You agree to indemnify and hold harmless DreadBike, its employees, and agents from any 
            claims, damages, or expenses arising from your use of our services, violation of these Terms, 
            or violation of any laws or regulations. This includes but is not limited to claims related 
            to modified motorcycles, performance modifications, or safety issues.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>8. INTELLECTUAL PROPERTY</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            All content on our website, including text, graphics, logos, and images, is the property 
            of DreadBike and protected by copyright and trademark laws. You may not:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Copy, modify, or distribute our content without permission</li>
            <li>Use our trademarks or logos without authorization</li>
            <li>Reverse engineer our processes or techniques</li>
            <li>Create derivative works based on our content</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>9. PRIVACY AND DATA PROTECTION</h2>
          <p className='text-gray-300 leading-relaxed'>
            Your privacy is important to us. Our collection and use of personal information is governed 
            by our Privacy Policy, which is incorporated into these Terms by reference. By using our 
            services, you consent to the collection and use of your information as described in our 
            Privacy Policy.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>10. TERMINATION</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            We may terminate or suspend your access to our services at any time, with or without cause, 
            including if you violate these Terms. Upon termination:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Your right to use our services ceases immediately</li>
            <li>We may retain your information as required by law</li>
            <li>Outstanding payments remain due and payable</li>
            <li>Provisions that by their nature should survive termination remain in effect</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>11. GOVERNING LAW AND DISPUTES</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            These Terms are governed by the laws of the State of Terror City, without regard to conflict 
            of law principles. Any disputes arising from these Terms or our services shall be resolved 
            through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>
          <p className='text-gray-300 leading-relaxed'>
            You waive any right to a jury trial and agree to resolve disputes on an individual basis, 
            not as part of a class action.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>12. MODIFICATIONS TO TERMS</h2>
          <p className='text-gray-300 leading-relaxed'>
            We reserve the right to modify these Terms at any time. We will notify you of material 
            changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. 
            Your continued use of our services after such changes constitutes acceptance of the updated Terms.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>13. SEVERABILITY</h2>
          <p className='text-gray-300 leading-relaxed'>
            If any provision of these Terms is found to be unenforceable or invalid, the remaining 
            provisions will remain in full force and effect. We will replace any invalid provision 
            with a valid provision that most closely approximates the intent of the original provision.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>14. ENTIRE AGREEMENT</h2>
          <p className='text-gray-300 leading-relaxed'>
            These Terms, together with our Privacy Policy and any other agreements referenced herein, 
            constitute the entire agreement between you and DreadBike regarding our services and 
            supersede all prior agreements and understandings.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>15. CONTACT INFORMATION</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            If you have any questions about these Terms, please contact us:
          </p>
          <div className='text-gray-300 space-y-2'>
            <p><strong>Email:</strong> legal@dreadbike.com</p>
            <p><strong>Phone:</strong> +1 (666) DREAD-BIKE</p>
            <p><strong>Address:</strong> 13 Fear Street, Terror City, TC 66666</p>
          </div>
        </div>

        <div className='bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg p-6 border border-orange-500/30'>
          <h2 className='text-2xl font-bold text-orange-400 mb-4'>⚡ RIDE WITH CONFIDENCE</h2>
          <p className='text-gray-300 leading-relaxed'>
            These Terms ensure that both you and DreadBike understand our mutual responsibilities. 
            We&apos;re committed to providing exceptional motorcycle services while maintaining clear, 
            fair, and professional business practices. When you choose DreadBike, you&apos;re not just 
            getting a service—you&apos;re joining a community of riders who demand excellence.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
