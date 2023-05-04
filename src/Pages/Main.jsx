import { useState } from 'react'
import DatePanel from '../Components/DatePanel'
import Table from '../Components/Table'
import { tableStates } from '../constants/tableStates'

export default function Main({ currentTable }) {
  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <>
      <div className="container">
        <div className="mt-3">
          {currentTable === tableStates.shedule && (
            <DatePanel
              setCurrentDate={setCurrentDate}
              currentDate={currentDate}
            />
          )}
        </div>
        <Table currentTable={currentTable} />
      </div>
    </>
  )
}

function getFullDate(date) {
  let month = date.getMonth() + 1
  if (month < 10) {
    month = '0' + month
  }
  let day = date.getDate()
  if (day < 10) {
    day = '0' + day
  }
  return day + '.' + month + '.' + date.getFullYear()
}
