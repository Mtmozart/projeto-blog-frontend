import { render, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostGrid, PostGridProps } from '.';
import mock from './mock';

const props = mock;

describe('<PostGrid />', () => {
  it('should not render posts', () => {
    renderTheme(<PostGrid {...props} posts={undefined} />);
  });

  it('should render 2 posts', () => {
    const { container } = renderTheme(<PostGrid {...props} />);

    expect(screen.getAllByRole('heading')).toHaveLength(3);
    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(container.querySelectorAll('p')).toHaveLength(3);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostGrid {...props} />);
    expect(container).toMatchSnapshot();
  });
});
