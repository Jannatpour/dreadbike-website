import LegalLayout from '../components/LegalLayout';

export default function AboutPage() {
  return (
    <LegalLayout title='About DreadBike' lastUpdated='January 2025'>
      <div className='space-y-6'>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Our Story</h2>
          <p className='text-gray-300 leading-relaxed'>
            DreadBike was born from a passion for transforming ordinary
            motorcycles into extraordinary machines. Founded by riders who
            understand the thrill of the road and the need for performance, we
            specialize in custom builds, performance upgrades, and professional
            tuning services.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4'>Our Mission</h2>
          <p className='text-gray-300 leading-relaxed'>
            To unleash the fear and help riders experience the ultimate thrill.
            Every bike that leaves our shop is a testament to our commitment to
            quality, performance, and the relentless pursuit of perfection.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4'>What We Do</h2>
          <ul className='text-gray-300 space-y-2'>
            <li>• Custom motorcycle builds and modifications</li>
            <li>• Performance tuning and engine upgrades</li>
            <li>• Suspension and handling improvements</li>
            <li>• Aesthetic customization and paint work</li>
            <li>• Maintenance and repair services</li>
          </ul>
        </section>
      </div>
    </LegalLayout>
  );
}
