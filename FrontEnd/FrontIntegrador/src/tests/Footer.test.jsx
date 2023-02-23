import { render, screen } from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
import Footer from '../components/pages/Footer'

expect.extend(matchers);

beforeEach(() => {
  render(<Footer />)
})

it("debe mostrar derechos reservados", () => {
  const motto = screen.getByText(/2023 digital booking/i);
  expect(motto).toBeInTheDocument();
})

it("debe contener logos de 4 redes sociales", () => {
  const logos = screen.getAllByRole('link')
  expect(logos.length).toBe(4)
})
