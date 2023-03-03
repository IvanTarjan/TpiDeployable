import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/pages/Header'
import matchers from "@testing-library/jest-dom/matchers";
import { MemoryRouter } from 'react-router-dom';
import DateAvailability from '../components/commons/DateAvailability';
import BodyContextProvider from '../components/contexts/BodyContext';

expect.extend(matchers);

beforeEach(() => {
  render(<BodyContextProvider><DateAvailability id={1}/></BodyContextProvider>, { wrapper: MemoryRouter })
})

describe.skip('Funcionalidad del selector de dias por producto', () => {
    it('Debe reiniciarse si los dias seleccionados no estan disponibles', () => {
        // const datePicker = screen.getByTestId('date-picker');
        const date = screen.findByDisplayValue([null, null])
        // no guarda los values en ningun lado aaa
        fireEvent.change(date, {EventTarget: {value: ['2023/3/3', '2023/3/8']}})
        console.log(date);
    })
})