import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste component <App />', () => {
  it(`Teste se a aplicação é redirecionada para a página inicial,
   na URL / ao clicar no link Home da barra de navegação;`, () => {
    // Peguei o history do renderWithRouter pra poder especificar o historico da rota.
    const { history } = renderWithRouter(<App />);

    // Peguei o elemento que contei o link "Home".
    const linkHome = screen.getByRole('link', {
      name: /home/i,
    });

    // userEvent.click pra dizer ao clicar no link.
    userEvent.click(linkHome);

    // Destruturei o pathname pra especificar a rota que a gente espera ser redirecionado.
    const { pathname } = history.location;

    // Espero que a rota seja igual a "/".
    expect(pathname).toBe('/');

    // Verifiquei que o link com o nome "Home" é exibido na tela.
    expect(linkHome).toBeInTheDocument();
  });

  it(`Teste se a aplicação é redirecionada para a página de About, 
  na URL /about, ao clicar no link About da barra de navegação;`, () => {
    // Peguei o history do renderWithRouter pra poder especificar o historico da rota.
    const { history } = renderWithRouter(<App />);

    // Peguei o elemento que contei o link "About".
    const linkAbout = screen.getByRole('link', {
      name: /about/i,
    });

    // userEvent.click pra dizer ao clicar no link.
    userEvent.click(linkAbout);

    // Destruturei o pathname pra especificar a rota que a gente espera ser redirecionado.
    const { pathname } = history.location;

    // Espero que a rota seja igual a "/about".
    expect(pathname).toBe('/about');

    // Verifiquei que existe na tela um link "About".
    expect(linkAbout).toBeInTheDocument();
  });

  it(`Teste se a aplicação é redirecionada para a página de Pokémons Favoritados,
   na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação;`, () => {
    // Peguei o history do renderWithRouter pra poder especificar o historico da rota.
    const { history } = renderWithRouter(<App />);

    // Peguei o elemento que contei o link "About".
    const linkFavorites = screen.getByRole('link', {
      name: /favorite pokémons/i,
    });

    // userEvent.click pra dizer ao clicar no link.
    userEvent.click(linkFavorites);

    // Destruturei o pathname pra especificar a rota que a gente espera ser redirecionado.
    const { pathname } = history.location;

    // Espero que a rota seja igual a "/favorites".
    expect(pathname).toBe('/favorites');

    // Verifiquei que existe na tela um link "Favorites Pokémon".
    expect(linkFavorites).toBeInTheDocument();
  });

  it(`Teste se a aplicação é redirecionada para a página Not Found
   ao entrar em uma URL desconhecida.`, () => {
    renderWithRouter(<NotFound />);

    const textoNotFound = screen.getByRole('heading', {
      name: /page requested not found/i,
    });

    expect(textoNotFound).toBeInTheDocument();
  });
});
