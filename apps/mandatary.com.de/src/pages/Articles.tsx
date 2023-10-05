import { getSortedPosts } from '@/lib/posts';

import ArticlesContents from '@/contents/Articles';
import HeaderImage from '@/contents/Articles/HeaderImage';
import Page from '@/contents-layouts/Page';

import type { ArticlesContentsProps } from '@/contents/Articles';
import type { GetStaticProps } from 'next';

type ArticlesProps = {
  posts: ArticlesContentsProps['posts'];
};

function Articles({ posts }: ArticlesProps) {
  return (
    <Page
      frontMatter={{
        title: 'Our Articles',
        description:
          'Exploring the Data Landscape, Unraveling Cloud Narratives, and Navigating DevOps Insights.',
      }}
      headerImage={<HeaderImage />}
    >
      <ArticlesContents posts={posts} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<ArticlesProps> = async () => {
  const allPostsData = getSortedPosts();

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Articles;
