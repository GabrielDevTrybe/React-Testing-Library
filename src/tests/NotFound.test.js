import React from 'react';
import { screen, render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste, página contém um heading h2 com o texto Page requested not found', () => {
    render(<NotFound />);

    const h2NotFound = screen.getByRole('heading', {
      name: /page requested not found/i,
    }, { level: 2 });

    expect(h2NotFound).toBeInTheDocument();
  });

  it('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    render(<NotFound />);

    const srcText = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    const img = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });

    expect(img).toHaveAttribute('src', srcText);
  });
});
