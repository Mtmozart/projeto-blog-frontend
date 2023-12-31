import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(
      screen.getByRole('link', { name: 'Matheus Mozart' }),
    ).toHaveAttribute('href', '/author/matheus-mozart');
    expect(screen.getByRole('link', { name: 'React6' })).toHaveAttribute(
      'href',
      '/category/react6',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByText('2 de jun. de 2023')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot with no author and categories', () => {
    const { container } = renderTheme(
      <ArticleMeta {...props} author={undefined} categories={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
