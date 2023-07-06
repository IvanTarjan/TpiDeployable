import React, { useContext, useState } from 'react'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import locale from 'date-fns/locale/es';
import { useMediaQuery } from '@mui/material';

const SearchingBar = () => {
  const { localizaciones, selectedCity, setSelectedCity } = useContext(BodyContext)
  const [openCal, setOpenCal] = useState(false)
  const [isDateSelected, setIsDateSelected] = useState('range')
  const [date, setDate] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
  ]);

  const isMobile = useMediaQuery('(max-width:640px)');
  const cities = document.getElementById('destination');
  const navigate = useNavigate()

  const handleOpenCal = () => {
    setOpenCal(pre => !pre)
    setIsDateSelected('')
  }

  const handleSearch = () => {
    setSelectedCity(cities.value)
    navigate('/results/', { state: { selectedCity, date } })
  }

  return (
    <div className={styles.searchingBox}>
      <p className={styles.searchingP}>Encontra el vehiculo ideal para tu proximo viaje</p>
      <div className={styles.searchingBoxData} >
        <div className={styles.searchingBoxItem}>
          <LocationOnIcon color='secondary' fontSize='large' />
          <select className={styles.searchingBoxInput} name='destination' id='destination' >
            <option value={''}>¿A dónde vamos?</option>
            {localizaciones.map(ciudad => (
              <option key={ciudad.id} value={ciudad.ciudad}>{ciudad.ciudad}</option>
            ))}
          </select>
        </div>

        <div className={styles.searchingBoxItem}>
          <EventIcon fontSize='large' />
          {isDateSelected == 'range' ? <span onClick={handleOpenCal} className={styles.searchingBoxDates}>Retiro / Devolucion</span> :
            <span onClick={handleOpenCal} className={styles.searchingBoxDates}>{`${format(date[0].startDate, "dd/MM/yyyy")} al ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>}
          {openCal && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className={styles.calendar}
            minDate={new Date()}
            locale={locale}
            months={isMobile ? 1 : 2}
            direction='horizontal'
          />}
        </div>

        <div className={styles.searchingBoxItem}>
          <button onClick={handleSearch} className={styles.searchingBoxButton}>Buscar</button>
        </div>
      </div>
    </div>
  )
}

export default SearchingBar