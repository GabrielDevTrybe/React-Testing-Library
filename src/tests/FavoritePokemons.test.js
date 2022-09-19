import React from 'react';
import { screen, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
// import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it(`Teste se é exibida na tela a mensagem No favorite pokemon found, 
  caso a pessoa não tenha pokémons favoritos;`, () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/favorites');
    });

    const msg = screen.getByText(/no favorite pokemon found/i);
    expect(msg).toBeInTheDocument();
  });

  it('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    const { history } = renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(buttonDetails);

    act(() => {
      history.push('/pokemons/25');
    });

    const checkbox = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(checkbox);

    act(() => {
      history.push('/favorites');
    });

    const name = screen.getByText(/pikachu/i);
    expect(name).toBeInTheDocument();

    const type = screen.getByText(/electric/i);
    expect(type).toBeInTheDocument();

    const average = screen.getByText(/average weight: 6\.0 kg/i);
    expect(average).toBeInTheDocument();

    const img = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });
    expect(img).toBeInTheDocument();
  });
});
