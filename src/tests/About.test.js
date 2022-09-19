import React from 'react';
import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import About from '../pages/About';
// import renderWithRouter from '../helper/renderWithRouter';
// import NotFound from '../pages/NotFound';

describe('Teste o componente <About.js />.', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    render(<About />);
    const texto = 'This application simulates a Pokédex';
    const texto2 = 'a digital encyclopedia containing all Pokémons';

    const paragrafo1 = screen.getByText(`${texto}, ${texto2}`);

    expect(paragrafo1).toBeInTheDocument();
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);

    const heading = screen.getByRole('heading', {
      name: /about pokédex/i,
    }, { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    render(<About />);
    const texto = 'This application simulates a Pokédex';
    const texto2 = 'a digital encyclopedia containing all Pokémons';

    const paragrafo1 = screen.getByText(`${texto}, ${texto2}`);
    const paragrafo2 = screen.getByText(
      /one can filter pokémons by type, and see more details for each one of them/i,
    );

    expect(paragrafo1).toBeInTheDocument();
    expect(paragrafo2).toBeInTheDocument();
  });

  it(`este se a página contém a seguinte imagem de uma
   Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`, () => {
    render(<About />);
    const srcText = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    const img = screen.getByRole('img', {
      name: /pokédex/i,
    });

    expect(img).toHaveAttribute('src', srcText);
  });
});
