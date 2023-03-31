import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../components/pages/Body'
import matchers from "@testing-library/jest-dom/matchers";
import { MemoryRouter } from 'react-router-dom';
import HeaderContextProvider from '../components/contexts/HeaderContext';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import BodyContextProvider from '../components/contexts/BodyContext';

expect.extend(matchers);

beforeEach(() => {
  render(<HeaderContextProvider><BodyContextProvider><Body /></BodyContextProvider></HeaderContextProvider>, { wrapper: MemoryRouter })
})

it("debe mostrar componente de busqueda", () => {
  const motto = screen.getByText(/encontra el vehiculo ideal/i);
  expect(motto).toBeInTheDocument();
})

it("debe mostrar componente que lista los vehiculos", () => {
  const motto = screen.getByText(/tipo de vehiculo/i);
  expect(motto).toBeInTheDocument();
})

const fetchData = () => axios.get("http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/api/producto/q/8")

it('el primer modelo de auto que debe renderizarse el el listado es random', async () => {
  await act(async () => {
    const res = await fetchData();
    expect(res.data[0].titulo).toBeTruthy();
  })
})

it('listado de vehiculos debe mostrar el total de vehiculos que devuelve la api que es igaul a 8', async () => {
  const carCards = await screen.findAllByTestId("car-card")
  return fetchData().then(res => {
    expect(res.data.length).toBe(8)
  })
})

