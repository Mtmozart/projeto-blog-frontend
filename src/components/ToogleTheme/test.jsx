import { screen } from '@testing-library/react';
import { ToogleTheme } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<ToogleTheme />', () => {
  it('should render', () => {
    renderTheme(<ToogleTheme />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
