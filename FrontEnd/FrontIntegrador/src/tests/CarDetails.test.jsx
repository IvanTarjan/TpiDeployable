import { fireEvent, render, screen } from '@testing-library/react';
import CarDetails from '../components/pages/CarDetails'
import matchers from "@testing-library/jest-dom/matchers";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import BodyContextProvider from '../components/contexts/BodyContext';

expect.extend(matchers);

beforeEach(() => {
  render(
    <BodyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/category/:name/car/:id' element={<CarDetails />} />
        </Routes>
      </BrowserRouter>
    </BodyContextProvider>)
})

// it('debe mostrar el nombre de la ciudad San Carlos de Bariloche', async () => {
//   const cityName = await screen.findByText(/san carlos de bariloche/i)
//   expect(cityName.textContent).toBe("San Carlos de Bariloche")
// })

const fetchData = () => axios.get("http://localhost:5000/localizaciones")

it('la ciudad que debe renderizarse en encabezado es San Carlos de Bariloche', async () => {
  await act(async () => {
    const res = await fetchData();
    expect(res.data[0].ciudad).toBe("San Carlos de Bariloche");
  })
})

it('la ciudad que debe renderizarse en encabezado es San Martin de los Andes', async () => {
  await act(async () => {
    const res = await fetchData();
    expect(res.data[9].ciudad).toBe("San Martin de los Andes");
  })
})