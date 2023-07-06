import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/pages/Header'
import matchers from "@testing-library/jest-dom/matchers";
import { MemoryRouter } from 'react-router-dom';
import HeaderContextProvider from '../components/contexts/HeaderContext';

expect.extend(matchers);

beforeEach(() => {
  render(<HeaderContextProvider><Header /></HeaderContextProvider>, { wrapper: MemoryRouter })
})

describe('Elementos basicos del header', () => {
  it("debe mostrar lema", () => {
    const motto = screen.getByText(/viaja como quieras/i);
    expect(motto).toBeInTheDocument();
  })

  it("mostrar boton crear usuario", () => {
    const accountBtn = screen.getByRole('button', { name: /crear cuenta/i })
    expect(accountBtn).toBeInTheDocument()
  })

  it('mostrar boton iniciar sesion', () => {
    const loginBtn = screen.getByRole('button', { name: /iniciar sesion/i })
    expect(loginBtn).toBeInTheDocument()
  })

  it('si se clickea boton crear cuenta, header no renderiza boton crear cuenta', () => {
    const accountBtn = screen.getByRole('button', { name: /crear cuenta/i })
    fireEvent.click(accountBtn)
    setTimeout(() => expect(accountBtn).not.toBeInTheDocument(), 5)
  })

  it('si se clickea boton iniciar sesion, header no renderiza boton iniciar sesion', () => {
    const loginBtn = screen.getByRole('button', { name: /iniciar/i })
    fireEvent.click(loginBtn)
    setTimeout(() => expect(loginBtn).not.toBeInTheDocument(), 5)
  })

  // it('si un usuario se loguea, debe mostrar avatar con iniciales y saludo al usuario', () => {
  //   const greeting = screen.getByText(/hola emilio pino/i)
  //   expect(greeting).toBeInTheDocument()

  // })
})
