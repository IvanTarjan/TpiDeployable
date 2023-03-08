import { fireEvent, render, screen } from '@testing-library/react';
import CarDetails from '../components/pages/CarDetails'
import matchers from "@testing-library/jest-dom/matchers";
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import BodyContextProvider from '../components/contexts/BodyContext';
import SearchResults from '../components/pages/SearchResults';

expect.extend(matchers);

beforeEach(() => {
  render(<BodyContextProvider><SearchResults /></BodyContextProvider>, { wrapper: MemoryRouter })
})

it("debe tener icono para retornar a home page", () => {
  const arrowIcon = screen.getByTestId("ArrowBackIosNewIcon")
  expect(arrowIcon).toBeInTheDocument()
})

it("debe mostrar componente de busqueda", () => {
  const info = screen.getByText(/Haga click en boton VER MAS/i);
  expect(info).toBeInTheDocument();
})