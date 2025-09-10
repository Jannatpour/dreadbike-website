import LegalLayout from '../components/LegalLayout';

export default function Warranty() {
  return (
    <LegalLayout title="WARRANTY" lastUpdated="January 1, 2025">
      <div className='space-y-8'>
        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>1. WARRANTY OVERVIEW</h2>
          <p className='text-gray-300 leading-relaxed'>
            At DreadBike, we stand behind our work with the same confidence we have in our motorcycles. 
            This warranty covers our professional motorcycle tuning, modification, and repair services, 
            ensuring your investment is protected and your ride performs as intended.
          </p>
          <p className='text-gray-300 leading-relaxed mt-4'>
            Our warranty reflects our commitment to quality craftsmanship and customer satisfaction. 
            We build motorcycles that are meant to last, and our warranty backs that promise.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>2. WORKMANSHIP WARRANTY</h2>
          
          <h3 className='text-xl font-semibold text-orange-500 mb-3'>2.1 Coverage Period</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            All DreadBike services come with a comprehensive workmanship warranty:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li><strong>Performance Tuning:</strong> 90 days from service completion</li>
            <li><strong>Custom Modifications:</strong> 6 months from service completion</li>
            <li><strong>Engine Builds/Rebuilds:</strong> 12 months from service completion</li>
            <li><strong>Paint and Graphics:</strong> 12 months from service completion</li>
            <li><strong>General Repairs:</strong> 90 days from service completion</li>
          </ul>

          <h3 className='text-xl font-semibold text-orange-500 mb-3 mt-6'>2.2 What&apos;s Covered</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            Our workmanship warranty covers:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Defects in workmanship and installation</li>
            <li>Improperly installed parts or components</li>
            <li>Faulty electrical connections made by DreadBike</li>
            <li>Paint defects and premature failure</li>
            <li>Improperly tuned or calibrated systems</li>
            <li>Leaks or failures due to poor installation</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>3. PARTS WARRANTY</h2>
          
          <h3 className='text-xl font-semibold text-orange-500 mb-3'>3.1 DreadBike Parts</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            Parts supplied by DreadBike are covered as follows:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li><strong>New OEM Parts:</strong> Manufacturer&apos;s warranty (typically 12-24 months)</li>
            <li><strong>Aftermarket Performance Parts:</strong> 6 months from installation</li>
            <li><strong>Custom Fabricated Parts:</strong> 12 months from installation</li>
            <li><strong>Paint and Graphics Materials:</strong> 12 months from application</li>
          </ul>

          <h3 className='text-xl font-semibold text-orange-500 mb-3 mt-6'>3.2 Customer-Supplied Parts</h3>
          <p className='text-gray-300 leading-relaxed'>
            Parts supplied by customers are covered only for installation workmanship. 
            We are not responsible for defects in customer-supplied parts, but we will 
            assist with warranty claims to the original manufacturer when possible.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>4. WARRANTY EXCLUSIONS</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            This warranty does not cover:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Normal wear and tear of parts and components</li>
            <li>Damage caused by accidents, collisions, or misuse</li>
            <li>Damage from improper maintenance or neglect</li>
            <li>Pre-existing conditions or damage</li>
            <li>Modifications made by others after our service</li>
            <li>Damage from environmental factors (weather, road conditions)</li>
            <li>Damage from racing or competitive use</li>
            <li>Consumable items (filters, fluids, brake pads, etc.)</li>
            <li>Damage from improper storage or transportation</li>
            <li>Cosmetic damage from normal use</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>5. WARRANTY CLAIM PROCESS</h2>
          
          <h3 className='text-xl font-semibold text-orange-500 mb-3'>5.1 Reporting Issues</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            To make a warranty claim:
          </p>
          <ol className='list-decimal list-inside text-gray-300 space-y-2 ml-4'>
            <li>Contact DreadBike immediately upon discovering the issue</li>
            <li>Provide your service order number and date of service</li>
            <li>Describe the problem in detail</li>
            <li>Schedule an inspection appointment</li>
            <li>Do not attempt repairs without our authorization</li>
          </ol>

          <h3 className='text-xl font-semibold text-orange-500 mb-3 mt-6'>5.2 Inspection and Resolution</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            We will:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Inspect the motorcycle within 5 business days</li>
            <li>Determine if the issue is covered under warranty</li>
            <li>Provide a written estimate for covered repairs</li>
            <li>Complete repairs at no charge if covered</li>
            <li>Explain any charges for non-covered items</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>6. PERFORMANCE GUARANTEES</h2>
          
          <h3 className='text-xl font-semibold text-orange-500 mb-3'>6.1 Tuning Guarantees</h3>
          <p className='text-gray-300 leading-relaxed mb-4'>
            For performance tuning services, we guarantee:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Measurable performance improvements as specified in service estimate</li>
            <li>Proper engine operation within safe parameters</li>
            <li>Elimination of specified issues (rough idle, poor fuel economy, etc.)</li>
            <li>Compliance with emissions standards (where applicable)</li>
          </ul>

          <h3 className='text-xl font-semibold text-orange-500 mb-3 mt-6'>6.2 Custom Modification Guarantees</h3>
          <p className='text-gray-300 leading-relaxed'>
            For custom modifications, we guarantee proper installation and functionality. 
            Performance results may vary based on motorcycle condition, riding style, and 
            environmental factors beyond our control.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>7. WARRANTY TRANSFER</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            This warranty is transferable to subsequent owners under the following conditions:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Transfer must be reported to DreadBike within 30 days of ownership change</li>
            <li>New owner must provide proof of ownership and transfer documentation</li>
            <li>Warranty period remains based on original service date</li>
            <li>All warranty terms and conditions apply to new owner</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>8. MAINTENANCE REQUIREMENTS</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            To maintain warranty coverage, you must:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Follow all recommended maintenance schedules</li>
            <li>Use only recommended fluids and parts</li>
            <li>Have maintenance performed by qualified technicians</li>
            <li>Keep detailed maintenance records</li>
            <li>Address any issues promptly</li>
            <li>Follow all safety recommendations</li>
          </ul>
          <p className='text-gray-300 leading-relaxed mt-4'>
            Failure to maintain your motorcycle according to our recommendations may void warranty coverage.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>9. WARRANTY LIMITATIONS</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            This warranty is subject to the following limitations:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Warranty is limited to repair or replacement of defective parts/workmanship</li>
            <li>We are not liable for consequential damages or loss of use</li>
            <li>Warranty does not cover incidental or indirect damages</li>
            <li>Our total liability is limited to the cost of the original service</li>
            <li>Some jurisdictions may not allow limitation of damages</li>
          </ul>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>10. EXTENDED WARRANTY OPTIONS</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            For additional peace of mind, we offer extended warranty options:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li><strong>Performance Plus:</strong> Extended coverage for performance modifications</li>
            <li><strong>Custom Care:</strong> Extended coverage for custom builds and modifications</li>
            <li><strong>Total Protection:</strong> Comprehensive coverage for all services</li>
          </ul>
          <p className='text-gray-300 leading-relaxed mt-4'>
            Contact us for details on extended warranty options and pricing.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>11. WARRANTY DISPUTES</h2>
          <p className='text-gray-300 leading-relaxed'>
            If you disagree with our warranty decision, you may:
          </p>
          <ul className='list-disc list-inside text-gray-300 space-y-2 ml-4'>
            <li>Request a second opinion from an independent technician</li>
            <li>Submit documentation supporting your claim</li>
            <li>Request a meeting with our service manager</li>
            <li>Follow our formal dispute resolution process</li>
          </ul>
          <p className='text-gray-300 leading-relaxed mt-4'>
            We are committed to fair resolution of all warranty disputes.
          </p>
        </div>

        <div className='bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>12. CONTACT INFORMATION</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            For warranty claims or questions, contact us:
          </p>
          <div className='text-gray-300 space-y-2'>
            <p><strong>Warranty Department:</strong> warranty@dreadbike.com</p>
            <p><strong>Phone:</strong> +1 (666) DREAD-BIKE</p>
            <p><strong>Address:</strong> 13 Fear Street, Terror City, TC 66666</p>
            <p><strong>Hours:</strong> Monday-Friday, 8:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className='bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg p-6 border border-orange-500/30'>
          <h2 className='text-2xl font-bold text-orange-400 mb-4'>⚡ THE DREADBIKE PROMISE</h2>
          <p className='text-gray-300 leading-relaxed'>
            Our warranty isn&apos;t just a document—it&apos;s our commitment to excellence. We build motorcycles 
            that are meant to perform, and we stand behind every modification, every tune, and every 
            custom build. When you choose DreadBike, you&apos;re not just getting a service; you&apos;re getting 
            a promise that your motorcycle will deliver the performance and reliability you demand.
          </p>
          <p className='text-gray-300 leading-relaxed mt-4'>
            <strong>Ride with confidence. Ride with DreadBike.</strong>
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
