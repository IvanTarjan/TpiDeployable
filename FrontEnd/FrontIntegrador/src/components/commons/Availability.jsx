import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import styles from '../styles/Body.module.css'
import locale from 'date-fns/locale/es';
import { useMediaQuery } from '@mui/material';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Availability = () => {
  const [date, setDate] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
  ]);

  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <div className={styles.availabilityContainer}>
      <p>Fechas disponibles</p>
      <div className={styles.availabilityContainerCalendar}>
        <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={new Date()}
          locale={locale}
          direction='horizontal'
          months={isMobile ? 1 : 2}
        />
        <div className={styles.availabilityContainerBtn}>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <button>Iniciar reserva</button>
        </div>
      </div>
    </div>
  )
}

export default Availability