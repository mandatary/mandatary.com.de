import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Prabhjyoth Mattummal · Data Engineer"
        description="An online portfolio featuring a showcase of my projects and some thoughts as a Data Engineer who loves designing intuitive, clean and modern DevOps/Data pipelines."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
