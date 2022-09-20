import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  it('Os botões possuem o nome correto, e o data-testid=pokemon-type-button', () => {
    renderWithRouter(<App />);
    const dataTest = 'pokemon-type-button';

    const eletric = screen.getByRole('button', {
      name: /electric/i,
    });
    expect(eletric).toBeInTheDocument();

    const element = screen.getAllByTestId(dataTest);
    expect(element).toBeTruthy();

    const fire = screen.getByRole('button', {
      name: /electric/i,
    });
    expect(fire).toBeInTheDocument();
    const elementFire = screen.getAllByTestId(dataTest);
    expect(elementFire).toBeTruthy();

    const bug = screen.getByRole('button', {
      name: /bug/i,
    });
    expect(bug).toBeInTheDocument();
    const elementBug = screen.getAllByTestId(dataTest);
    expect(elementBug).toBeTruthy();

    const poison = screen.getByRole('button', {
      name: /poison/i,
    });
    expect(poison).toBeInTheDocument();
    const elementPoison = screen.getAllByTestId(dataTest);
    expect(elementPoison).toBeTruthy();

    const psychic = screen.getByRole('button', {
      name: /psychic/i,
    });
    expect(psychic).toBeInTheDocument();
    const elementPsychic = screen.getAllByTestId(dataTest);
    expect(elementPsychic).toBeTruthy();

    const normal = screen.getByRole('button', {
      name: /normal/i,
    });
    expect(normal).toBeInTheDocument();
    const elementNormal = screen.getAllByTestId(dataTest);
    expect(elementNormal).toBeTruthy();

    const dragon = screen.getByRole('button', {
      name: /dragon/i,
    });
    expect(dragon).toBeInTheDocument();
    const elementDragon = screen.getAllByTestId(dataTest);
    expect(elementDragon).toBeTruthy();
  });

  it('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', {
      name: /all/i,
    });
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);
  });
});
