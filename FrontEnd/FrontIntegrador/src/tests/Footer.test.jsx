import { render, screen } from '@testing-library/react';
import Footer from '../components/pages/Footer'
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

beforeEach(() => {
  render(<Footer />)
})

describe('Elementos basicos del footer', () => {
  it("debe mostrar derechos reservados", () => {
    const copyright = screen.getByText(/2023 digital booking/i);
    expect(copyright).toBeInTheDocument();
  })

  it("debe contener logos de 4 redes sociales", () => {
    const logos = screen.getAllByRole('link')
    expect(logos.length).toBe(4)
  })
})

