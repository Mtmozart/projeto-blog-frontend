import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostsTemplates, PostsTemplatesProps } from '.';
import mock from './mock';

const props: PostsTemplatesProps = mock;

describe('<ArticleMeta/>', () => {
  it('should render', () => {
    renderTheme(<PostsTemplates {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
