import { screen } from '@testing-library/react';
import { PostCard } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

const props = mock;

describe('<PostCard />', () => {
  it('should render a heading, cover and excerpt', () => {
    renderTheme(<PostCard {...props} />);
  });
  expect(
    screen.getByRole('heading', { name: props.title }),
  ).toBeInTheDocument();
});
