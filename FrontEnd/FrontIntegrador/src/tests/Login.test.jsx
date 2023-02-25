import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../components/pages/Login'
import matchers from "@testing-library/jest-dom/matchers";
import { MemoryRouter } from 'react-router-dom';
import HeaderContextProvider from '../components/contexts/HeaderContext';
import Header from '../components/pages/Header'

expect.extend(matchers);

beforeEach(() => {
  render(<HeaderContextProvider><Login /></HeaderContextProvider>, { wrapper: MemoryRouter })
})

describe('Deben estar los 2 campos del formulario de login', () => {
  it('debe renderizar input email', () => {
    const inputEmail = screen.getByLabelText("Correo electronico")
    expect(inputEmail).toBeInTheDocument()
  })

  it('debe renderizar input password', () => {
    const inputPassword = screen.getByLabelText('Contrasena')
    expect(inputPassword).toBeInTheDocument()
  })
})

describe('Cada campo debe mostrar lo que el usuario tipea', () => {
  it('tipeo en campo email', () => {
    const inputEmail = screen.getByLabelText("Correo electronico")
    fireEvent.change(inputEmail, { target: { value: "pinoe@gmail.com" } })
    expect(inputEmail.value).toBe("pinoe@gmail.com")
  })

  it('tipeo en campo password', () => {
    const inputPassword = screen.getByLabelText('Contrasena')
    fireEvent.change(inputPassword, { target: { value: "pinoe23" } })
    expect(inputPassword.value).toBe("pinoe23")
  })
})

// describe('Al loguearse usuario deben aparecer saludo en header', async () => {
//   it('tipeo en campo email', () => {
//     const inputEmail = screen.getByLabelText("Correo electronico")
//     fireEvent.change(inputEmail, { target: { value: "pinoe@gmail.com" } })

//     const inputPassword = screen.getByLabelText('Contrasena')
//     fireEvent.change(inputPassword, { target: { value: "pinoe23" } })

//     const loginBtn = screen.getByRole("button", { name: /ingresar/i })
//     fireEvent.click(loginBtn)

//     render(<HeaderContextProvider><Header /></HeaderContextProvider>, { wrapper: MemoryRouter })
//     const motto = screen.findByText(/hola/i);
//     expect(motto).toBeInTheDocument();
//   })
// })

