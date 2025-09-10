import LegalLayout from '../components/LegalLayout';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <LegalLayout title='Gallery' lastUpdated='January 2025'>
      <div className='space-y-6'>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Our Work</h2>
          <p className='text-gray-300 leading-relaxed mb-6'>
            Explore our portfolio of custom builds, performance upgrades, and
            transformations. Each bike tells a story of precision, power, and
            passion.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4'>Featured Builds</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className='bg-gray-800 rounded-lg overflow-hidden'>
                <Image
                  src={`/images/gallery-bike-${i}.jpg`}
                  alt={`Custom bike build ${i}`}
                  width={400}
                  height={192}
                  className='w-full h-48 object-cover'
                />
                <div className='p-4'>
                  <h3 className='font-semibold text-yellow-400 mb-2'>
                    Custom Build #{i}
                  </h3>
                  <p className='text-gray-300 text-sm'>
                    Professional motorcycle transformation showcasing our
                    expertise in performance and aesthetics.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4'>Services Showcase</h2>
          <p className='text-gray-300 leading-relaxed'>
            From complete custom builds to performance tuning and aesthetic
            modifications, our gallery represents the breadth of our
            capabilities and the quality of our craftsmanship.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
