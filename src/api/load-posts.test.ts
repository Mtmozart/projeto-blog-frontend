import request from 'graphql-request';
import config from '../config';
import { defaultLoadPostsVariables, loadPosts } from './load-posts';

jest.mock('graphql-request');

jest.mock('../graphql/queries', () => {
  return {
    GRAPHQL_QUERY: 'A_QUERY',
  };
});

describe('load-posts', () => {
  it('should call request with default variables', async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'A_QUERY',
      defaultLoadPostsVariables,
    );
  });

  it('should call request with custom variables', async () => {
    await loadPosts({
      justTesting: 'OK',
    } as any);

    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'A_QUERY',
      defaultLoadPostsVariables,
    );
  });
});
