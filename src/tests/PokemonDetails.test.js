import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <PokemonDetails.js />', () => {
  it('As informações detalhadas do pokémon selecionado são mostradas na tela', () => {
    const { history } = renderWithRouter(<App />);

    const name = screen.getByRole('button', {
      name: /electric/i,
    });
    userEvent.click(name);

    const buttonDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(buttonDetails);

    act(() => {
      history.push('/pokemons/25');
    });

    const nameDetails = screen.getByRole('heading', {
      name: /pikachu details/i,
    }, { level: 2 });
    expect(nameDetails).toBeInTheDocument();

    const summaryText = screen.getByRole('heading', {
      name: /summary/i,
    }, { level: 2 });
    expect(summaryText).toBeInTheDocument();

    const textoSuma = 'This intelligent Pokémon roasts hard berries with';
    const textoSuma2 = 'electricity to make them tender enough to eat.';
    const summaryDescription = screen.getByText(`${textoSuma} ${textoSuma2}`);
    expect(summaryDescription).toBeInTheDocument();
  });

  it('É exibido na tela um h2 com o texto Game Locations of <name>', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/pokemons/4');
    });
    const texto = screen.getByRole('heading', { name: /game locations of charmander/i,
      level: 2,
    });
    expect(texto).toBeInTheDocument();
  });

  it('São exibidas na tela as imagens com src correto', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pokemons/65');
    });

    const imgAlakazam = screen.getByRole('img', { name: /alakazam location/i });

    expect(imgAlakazam).toBeInTheDocument();
    expect(imgAlakazam).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/4/44/Unova_Accumula_Town_Map.png');
  });

  it('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/pokemons/4');
    });
    const label = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(label).toBeInTheDocument();
  });
});
