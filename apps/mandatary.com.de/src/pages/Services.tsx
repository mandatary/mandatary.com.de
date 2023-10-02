import ServicesContents from '@/contents/Services';
import HeaderImage from '@/contents/Services/HeaderImage';
import Page from '@/contents-layouts/Page';

function Services() {
  return (
    <Page
      frontMatter={{
        title: 'Our Services',
        description: `We offer the world, the following services.`,
      }}
      headerImage={<HeaderImage />}
    >
      <ServicesContents />
    </Page>
  );
}

export default Services;
