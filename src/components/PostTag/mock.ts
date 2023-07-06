/*export default {
  tags: [
    {
      data: {
        id: '2',
        attributes: {
          displayName: 'UseEffect',
          slug: 'use-effect',
        },
      },
    },
    {
      data: {
        id: '1',
        attributes: {
          displayName: 'UseState',
          slug: 'use-state',
        },
      },
    },
  ],
};*/

import postsApi from '../../utils/format-dataApi';
import { PostTagProps } from './index';

export default {
  tags: postsApi[0].tags,
} as PostTagProps;
