import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTemplate, PostTemplatePropst } from '.';

const props: PostTemplatePropst = {
  title: 'any',
};

describe('<PostTemplate/>', () => {
  it('should render', () => {
    renderTheme(<PostTemplate {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
