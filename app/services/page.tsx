import LegalLayout from '../components/LegalLayout';

export default function ServicesPage() {
  return (
    <LegalLayout title='Our Services' lastUpdated='January 2025'>
      <div className='space-y-6'>
        <section>
          <h2 className='text-2xl font-bold mb-4'>
            Professional Motorcycle Services
          </h2>
          <p className='text-gray-300 leading-relaxed mb-6'>
            At DreadBike, we offer comprehensive motorcycle services designed to
            unleash the full potential of your ride. Our expert technicians
            combine years of experience with cutting-edge techniques to deliver
            exceptional results.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4'>Custom Builds</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            Transform your vision into reality with our custom motorcycle
            builds. From concept to completion, we work closely with you to
            create a unique machine that reflects your style and performance
            needs.
          </p>
          <ul className='text-gray-300 space-y-2'>
            <li>• Complete custom motorcycle builds</li>
            <li>• Frame modifications and fabrication</li>
            <li>• Custom paint and finishing</li>
            <li>• Unique design consultation</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4'>Performance Tuning</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            Maximize your motorcycle&apos;s performance with our professional
            tuning services. We optimize every aspect of your bike&apos;s
            performance for the ultimate riding experience.
          </p>
          <ul className='text-gray-300 space-y-2'>
            <li>• Engine tuning and optimization</li>
            <li>• ECU remapping and calibration</li>
            <li>• Exhaust system upgrades</li>
            <li>• Air intake modifications</li>
            <li>• Dyno testing and analysis</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4'>Suspension & Handling</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            Improve your bike&apos;s handling and comfort with our suspension
            services. We fine-tune your motorcycle&apos;s suspension for optimal
            performance on any terrain.
          </p>
          <ul className='text-gray-300 space-y-2'>
            <li>• Suspension setup and tuning</li>
            <li>• Fork and shock upgrades</li>
            <li>• Geometry adjustments</li>
            <li>• Brake system enhancements</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4'>Maintenance & Repair</h2>
          <p className='text-gray-300 leading-relaxed mb-4'>
            Keep your motorcycle running at peak performance with our
            comprehensive maintenance and repair services.
          </p>
          <ul className='text-gray-300 space-y-2'>
            <li>• Regular maintenance and servicing</li>
            <li>• Diagnostic and troubleshooting</li>
            <li>• Parts replacement and upgrades</li>
            <li>• Pre-purchase inspections</li>
          </ul>
        </section>
      </div>
    </LegalLayout>
  );
}
