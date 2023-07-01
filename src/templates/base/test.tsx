import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BaseTemplate, BaseTemplateProps } from '.';
import mock from './mock';

const props: BaseTemplateProps = mock;

describe('<BaseTemplate />', () => {
  it('should render base elements', () => {
    renderTheme(<BaseTemplate {...props} />);
    expect(
      screen.getByRole('img', {
        name: 'Alameda do dev - O blog é dedicado a compartilhar conhecimentos e experiências de desenvolvedores em diversas áreas, oferecendo insights valiosos e dicas práticas para o aprimoramento das habilidades de programação. Aborda tópicos como linguagens de programação, frameworks, boas práticas de codificação, desenvolvimento web, mobile, inteligência artificial e muito mais. É uma fonte indispensável de informações atualizadas para desenvolvedores em busca de crescimento profissional e aprendizado contínuo.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
    expect(
      screen.getByText('Criado em 2023 | Matheus Mozart'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should render base elements', () => {
    const { container } = renderTheme(<BaseTemplate {...props} />);
    expect(container).toMatchSnapshot();
  });
});
