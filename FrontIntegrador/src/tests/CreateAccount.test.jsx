import { fireEvent, render, screen } from '@testing-library/react';
import CreateAccount from '../components/pages/CreateAccount'
import matchers from "@testing-library/jest-dom/matchers";
import { MemoryRouter } from 'react-router-dom';
import HeaderContextProvider from '../components/contexts/HeaderContext';
import { createMemoryHistory } from 'history';

expect.extend(matchers);

beforeEach(() => {
  render(<HeaderContextProvider><CreateAccount /></HeaderContextProvider>, { wrapper: MemoryRouter })
})

describe('Deben estar los 5 campos del formulario de registro', () => {
  it('debe renderizar input nombre', () => {
    const inputName = screen.getByLabelText("Nombre")
    expect(inputName).toBeInTheDocument()
  })

  it('debe renderizar input apellido', () => {
    const inputSurname = screen.getByLabelText("Apellido")
    expect(inputSurname).toBeInTheDocument()
  })

  it('debe renderizar input email', () => {
    const inputEmail = screen.getByLabelText("Correo electronico")
    expect(inputEmail).toBeInTheDocument()
  })

  it('debe renderizar input password', () => {
    const inputPassword = screen.getByLabelText('Contrasena')
    expect(inputPassword).toBeInTheDocument()
  })

  it('debe renderizar input confirmar password', () => {
    const inputConfirm = screen.getByLabelText("Confirmar contrasena")
    expect(inputConfirm).toBeInTheDocument()
  })
})

describe('Cada campo debe mostrar lo que el usuario tipea', () => {
  it('tipeo en campo nombre', () => {
    const inputName = screen.getByLabelText("Nombre")
    fireEvent.change(inputName, { target: { value: "Larizza" } })
    expect(inputName.value).toBe("Larizza")
  })

  it('tipeo en campo apellido', () => {
    const inputSurname = screen.getByLabelText("Apellido")
    fireEvent.change(inputSurname, { target: { value: "Januzi" } })
    expect(inputSurname.value).toBe("Januzi")
  })

  it('tipeo en campo email', () => {
    const inputEmail = screen.getByLabelText("Correo electronico")
    fireEvent.change(inputEmail, { target: { value: "januzzil@gmail.com" } })
    expect(inputEmail.value).toBe("januzzil@gmail.com")
  })

  it('tipeo en campo password', () => {
    const inputPassword = screen.getByLabelText('Contrasena')
    fireEvent.change(inputPassword, { target: { value: "januzzil23" } })
    expect(inputPassword.value).toBe("januzzil23")
  })

  it('tipeo en campo confirmar password', () => {
    const inputConfirm = screen.getByLabelText("Confirmar contrasena")
    fireEvent.change(inputConfirm, { target: { value: "januzzil23" } })
    expect(inputConfirm.value).toBe("januzzil23")
  })
})

// describe('Click en crear usuario nos redirecciona a /login', () => {
//   it('redireccion a formulario de login', () => {
//     const registerBtn = screen.getByRole('button', { name: /crear cuenta/i })
//     fireEvent.click(registerBtn)

//     const history = createMemoryHistory()
//     expect(history.location.pathname).toEqual("/login")
//   })
// })



// describe('Cada campo queda vacio luego de cliquear boton de registro', () => {
//   it('campo nombre vacio', () => {
//     const inputName = screen.getByLabelText("Nombre")
//     fireEvent.change(inputName, { target: { value: "Larizza" } })

//     const registerBtn = screen.getByRole('button', { name: /crear cuenta/i })
//     fireEvent.click(registerBtn)
//     setTimeout(() => expect(inputName.value).toBe(""), 5)
//   })

  // it('campo apellido vacio', () => {
  //   const inputSurname = screen.getByLabelText("Apellido")
  //   fireEvent.change(inputSurname, { target: { value: "Januzi" } })

  //   const registerBtn = screen.getByRole('button', { name: /crear cuenta/i })
  //   fireEvent.click(registerBtn)
  //   setTimeout(() => expect(inputSurname.value).toBe(""), 5)
  // })

  // it('campo email vacio', () => {
  //   const inputEmail = screen.getByLabelText("Correo electronico")
  //   fireEvent.change(inputEmail, { target: { value: "januzzil@gmail.com" } })

  //   const registerBtn = screen.getByRole('button', { name: /crear cuenta/i })
  //   fireEvent.click(registerBtn)
  //   setTimeout(() => expect(inputEmail.value).toBe(""), 5)
  // })

  // it('campo password vacio', () => {
  //   const inputPassword = screen.getByLabelText('Contrasena')
  //   fireEvent.change(inputPassword, { target: { value: "januzzil23" } })

  //   const registerBtn = screen.getByRole('button', { name: /crear cuenta/i })
  //   fireEvent.click(registerBtn)
  //   setTimeout(() => expect(inputPassword.value).toBe(""), 5)
  // })

  // it('campo confirmar password vacio', () => {
  //   const inputConfirm = screen.getByLabelText("Confirmar contrasena")
  //   fireEvent.change(inputConfirm, { target: { value: "januzzil23" } })

  //   const registerBtn = screen.getByRole('button', { name: /crear cuenta/i })
  //   fireEvent.click(registerBtn)
  //   setTimeout(() => expect(inputConfirm.value).toBe(""), 5)
  // })
// })
