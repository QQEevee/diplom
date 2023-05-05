import { teacherPath } from '../constants/path'
import '../css/regular-checkbox.css'
import { Link } from 'react-router-dom'

export default function SheduleAttendance() {
  const students = [
    {
      id: 1,
      name: 'Александр Сергеевич Пушкин',
      attendance: 5 / 6,
      visit: false,
    },
    {
      id: 2,
      name: 'Александр Сергеевич Пушкин',
      attendance: 5 / 6,
      visit: false,
    },
    {
      id: 3,
      name: 'Александр Сергеевич Пушкин',
      attendance: 5 / 6,
      visit: false,
    },
    {
      id: 4,
      name: 'Александр Сергеевич Пушкин',
      attendance: 5 / 6,
      visit: false,
    },
    {
      id: 5,
      name: 'Александр Сергеевич Пушкин',
      attendance: 5 / 6,
      visit: false,
    },
    {
      id: 6,
      name: 'Александр Сергеевич Пушкин',
      attendance: 5 / 6,
      visit: false,
    },
    {
      id: 7,
      name: 'Александр Сергеевич Пушкин',
      attendance: 5 / 6,
      visit: false,
    },
    {
      id: 8,
      name: 'Александр Сергеевич Пушкин',
      attendance: 5 / 6,
      visit: false,
    },
  ]

  return (
    <div className="container">
      <div className="mt-3 text-4xl">
        Занятие 19.02.2024 по дисциплине Основы научных исследований, группа
        ИС-19
      </div>
      <table className="table-auto">
        <thead>
          <tr className="header">
            <th>ФИО</th>
            <th>Посещаемость</th>
            <th>Посещение</th>
            <th>Перейти к посещаемости</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{Math.floor(student.attendance * 100) + '%'}</td>
              <td>
                <input type="checkbox" className="regular-checkbox" />
              </td>
              <td>
                <Link
                  to={teacherPath.studentAttendance.leadToPath + student.id}
                >
                  <div className="transition duration-150 rounded hover:text-white hover:bg-sky-500 border border-black max-w-sm my-2 p-1 mx-auto cursor-pointer">
                    ====&gt;
                  </div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
