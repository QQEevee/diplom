import { useNavigate } from 'react-router-dom'
import { teacherPath } from '../../constants/path'

export default function StudentAttendanceDataTabel() {
  const navigate = useNavigate()

  const sheduleData = [
    {
      id: 1,
      date: new Date(),
      subjectName: 'ОНИ',
      para: 1,
      classnumber: '521М',
      visit: true,
      sheduleId: 1,
    },
    {
      id: 2,
      date: new Date(),
      subjectName: 'ОНИ',
      para: 1,
      classnumber: '521М',
      visit: true,
      sheduleId: 2,
    },
    {
      id: 3,
      date: new Date(),
      subjectName: 'ОНИ',
      para: 1,
      classnumber: '521М',
      visit: true,
      sheduleId: 3,
    },
    {
      id: 4,
      date: new Date(),
      subjectName: 'ОНИ',
      para: 1,
      classnumber: '521М',
      visit: false,
      sheduleId: 4,
    },
    {
      id: 5,
      date: new Date(),
      subjectName: 'ОНИ',
      para: 1,
      classnumber: '521М',
      visit: false,
      sheduleId: 5,
    },
  ]

  function getFullDate(date) {
    let stringdate = ''
    if (date.getDate() < 10) {
      stringdate += '0' + date.getDate()
    } else {
      stringdate += date.getDate()
    }
    stringdate += '.'
    if (date.getMonth() < 10) {
      stringdate += '0' + date.getMonth()
    } else {
      stringdate += date.getMonth()
    }
    stringdate += '.' + date.getFullYear()
    return stringdate
  }

  return (
    <>
      <b className="ml-1 mb-2 block">Последние пары</b>
      <table className="table-auto mt-0 mb-6 ">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Дисциплина</th>
            <th>Пара</th>
            <th>Аудитория</th>
            <th>Посетил</th>
          </tr>
        </thead>
        <tbody>
          {sheduleData.map((shedule) => (
            <tr
              key={shedule.id}
              className="hover"
              onClick={() =>
                navigate(teacherPath.shedule.leadToPath + shedule.id)
              }
            >
              <td>{getFullDate(shedule.date)}</td>
              <td>{shedule.subjectName}</td>
              <td>{shedule.para}</td>
              <td>{shedule.classnumber}</td>
              <td>
                <input
                  readOnly
                  type="checkbox"
                  className="regular-checkbox"
                  checked={shedule.visit}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
