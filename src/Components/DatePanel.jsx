import { useRef } from 'react'
import { useState } from 'react'
import '../css/datepick.css'
import useOutsideAlerter from '../hooks/OutsideAlerter'

export default function DatePanel({ setCurrentDate, currentDate }) {
  const [currentActive, setCurrentActive] = useState(0)
  const ref = useRef(null)
  useOutsideAlerter(ref, setCurrentActive)

  function setCurrentActiveHandler(currentClicked) {
    if (currentActive === currentClicked) {
      setCurrentActive(0)
      console.log()
    } else {
      setCurrentActive(currentClicked)
    }
  }

  function getDaysInMonth() {
    return (
      33 -
      new Date(currentDate.getFullYear(), currentDate.getMonth(), 33).getDate()
    )
  }

  function getYears(){
    const initYear = 1970
    const m = []
    for( let i = initYear; i <= (new Date()).getFullYear(); i++){
      m.push(i)
    }
    return m
  }

  function getArrayFromOneToNum(num) {
    return Array.from(Array(num), (_, index) => index + 1)
  }

  return (
    <div className="date_panel" ref={ref}>
      <div className="picker">
        <div className="text-center p-1">Дата</div>
        <div className="picker_menu" onClick={() => setCurrentActiveHandler(1)}>
          {currentDate.getDate()}
          <span className="arrow">
            {currentActive !== 1 ? <>&#9660;</> : <>&#9650;</>}
          </span>
          {currentActive === 1 && (
            <ul className="picker_list">
              {getArrayFromOneToNum(getDaysInMonth()).map((num) => (
                <li
                  onClick={() =>
                    setCurrentDate(
                      new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        num
                      )
                    )
                  }
                  key={num}
                >
                  {num}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="picker">
        <div className="text-center p-1">Месяц</div>
        <div className="picker_menu" onClick={() => setCurrentActiveHandler(2)}>
          {currentDate.getMonth() + 1}
          <span className="arrow">
            {currentActive !== 2 ? <>&#9660;</> : <>&#9650;</>}
          </span>
          {currentActive === 2 && (
            <ul className="picker_list">
              {getArrayFromOneToNum(12).map((num) => (
                <li
                  onClick={() =>
                    setCurrentDate(
                      new Date(
                        currentDate.getFullYear(),
                        num - 1,
                        currentDate.getDate()
                      )
                    )
                  }
                  key={num}
                >
                  {num}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="picker">
        <div className="text-center p-1">Год</div>
        <div className="picker_menu" onClick={() => setCurrentActiveHandler(3)}>
          {currentDate.getFullYear()}
          <span className="arrow">
            {currentActive !== 3 ? <>&#9660;</> : <>&#9650;</>}
          </span>
          {currentActive === 3 && (
            <ul className="picker_list">
              {getYears().map(year => <li onClick={() =>
                    setCurrentDate(
                      new Date(
                        year,
                        currentDate.getMonth(),
                        currentDate.getDate()
                      )
                    )} 
                    key={year}>{year}</li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
