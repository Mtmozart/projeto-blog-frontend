import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';

import mock from './mock';
import { formatDate } from '../../utils/format-date';

const props = mock;

describe('<Post />', () => {
  it('should render header, excerpt, cover, metadata and post', () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(
      screen.getAllByText(/^Bem-vindo ao nosso site sobre React!/i)[0],
    ).toHaveStyle({ 'font-size': '2.4rem' });
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
