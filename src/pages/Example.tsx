import { SEO } from '@/components/SEO';

const ExamplePage = () => {
  return (
    <>
      <SEO
        title="Example Page | IPTV Service"
        description="This is an example page demonstrating our SEO implementation."
        canonical="/example"
        keywords="IPTV, streaming, example"
        type="website"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Example', path: '/example' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Example Page',
          'description': 'This is an example page.'
        }}
        alternateLanguages={{
          'en': 'https://www.iptvservice.site/example',
          'es': 'https://www.iptvservice.site/es/example'
        }}
      />
      <div>
        <h1>Example Page</h1>
        {/* Page content */}
      </div>
    </>
  );
};

export default ExamplePage;