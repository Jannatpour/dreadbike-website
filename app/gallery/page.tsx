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
            {[
              'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
            ].map((imageUrl, i) => (
              <div key={i} className='bg-gray-800 rounded-lg overflow-hidden'>
                <Image
                  src={imageUrl}
                  alt={`Custom bike build ${i + 1}`}
                  width={400}
                  height={192}
                  className='w-full h-48 object-cover'
                />
                <div className='p-4'>
                  <h3 className='font-semibold text-yellow-400 mb-2'>
                    Custom Build #{i + 1}
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
