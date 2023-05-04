import { useNavigate } from 'react-router-dom'
import { teacherPath } from '../../constants/path'
export default function SubjectDataTabel({ studentId }) {
  const navigate = useNavigate()

  const subject = [
    { groupAttendanceId: 1, name: 'ОНИ', per: 0.5 },
    { groupAttendanceId: 2, name: 'ОНИ', per: 0.5 },
    { groupAttendanceId: 3, name: 'ОНИ', per: 0.5 },
    { groupAttendanceId: 4, name: 'ОНИ', per: 0.5 },
    { groupAttendanceId: 5, name: 'ОНИ', per: 0.5 },
    { groupAttendanceId: 6, name: 'ОНИ', per: 0.5 },
    { groupAttendanceId: 7, name: 'ОНИ', per: 0.5 },
    { groupAttendanceId: 8, name: 'ОНИ', per: 0.5 },
    { groupAttendanceId: 9, name: 'ОНИ', per: 0.5 },
  ]
  function nav(sub) {
    if (studentId) {
      return navigate(teacherPath.studentAttendance.leadToPath + studentId)
    } else {
      return navigate(
        teacherPath.groupAttendance.leadToPath + sub.groupAttendanceId
      )
    }
  }

  return (
    <>
      <b className="ml-1 block mb-2">Дисциплины</b>
      <table className="table-auto m-0">
        <thead>
          <tr>
            <th>Название</th>
            <th>Посещаемость</th>
          </tr>
        </thead>
        <tbody>
          {subject.map((groupAttendance) => (
            <tr
              key={groupAttendance.groupAttendanceId}
              className="hover"
              onClick={() => nav(groupAttendance)}
            >
              <td>{groupAttendance.name}</td>
              <td>{groupAttendance.per + '%'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
