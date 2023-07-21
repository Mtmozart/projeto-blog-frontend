import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';

import props from './mock';

describe('<Header />', () => {
  it('should render an image, a heading and text', () => {
    renderTheme(<Header {...props} showText={undefined} />);

    expect(
      screen.getByRole('heading', { name: /Fallen Calvo/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Fallen Calvo/i })).toHaveAttribute(
      'src',
      props.logo.data.attributes.url,
    );
    expect(screen.getByText(props.blogDescription)).toBeInTheDocument();
  });

  it('should render image only', () => {
    renderTheme(<Header {...props} showText={false} />);

    expect(
      screen.queryByRole('heading', { name: props.blogName }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Fallen Calvo/i })).toHaveAttribute(
      'src',
      props.logo.data.attributes.url,
    );
    expect(screen.getAllByRole(props.blogDescription)).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Header {...props} showText={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
