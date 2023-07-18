import Head from 'next/head';
import { GetServerSideProps } from 'next';
import {
  loadPosts,
  StrapiPostAndSettings,
  defaultLoadPostsVariables,
} from '../../api/load-posts';
import { useRouter } from 'next/router';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function SearchPage({
  posts,
  setting,
  variables,
}: StrapiPostAndSettings) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Pesquisa: {router.query.q} - {setting.data.attributes.BlogName}
        </title>
        <meta
          name="description"
          content={setting.data.attributes.blogDescription}
        />
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  StrapiPostAndSettings
> = async (ctx) => {
  let data = null;
  const query = ctx.query.q || '';

  if (!query) {
    return {
      notFound: true,
    };
  }

  const variables = { postSearch: query as string };

  try {
    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
        ...variables,
      },
    },
  };
};
