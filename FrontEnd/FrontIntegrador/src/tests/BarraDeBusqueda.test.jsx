import { render, screen } from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
import BarraDeBusqueda from '../components/pages/BarraDeBusqueda'

expect.extend(matchers);

beforeEach(() => {
  render(<BarraDeBusqueda/>)
})

it("debe mostrar derechos reservados", () => {
  const motto = screen.getByTestId("")
  expect(motto).toBeInTheDocument();
})

it("debe contener logos de 4 redes sociales", () => {
  const logos = screen.getAllByRole('link')
  expect(logos.length).toBe(4)
})
