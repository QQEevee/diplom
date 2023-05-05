import { useNavigate } from 'react-router-dom'
import { teacherPath } from '../../constants/path'

export default function StudentDataTabel({ subjectId }) {
  const navigate = useNavigate()

  const studentData = [
    {
      id: 1,
      name: 'Кирилл',
      per: 70,
    },
    {
      id: 2,
      name: 'Кирилл',
      per: 70,
    },
    {
      id: 3,
      name: 'Кирилл',
      per: 70,
    },
    {
      id: 4,
      name: 'Кирилл',
      per: 70,
    },
    {
      id: 5,
      name: 'Кирилл',
      per: 70,
    },
    {
      id: 6,
      name: 'Кирилл',
      per: 70,
    },
  ]
  const fakefakeStudentAttendanceData = { id: 1 }

  function nav(student) {
    if (subjectId) {
      navigate(
        teacherPath.studentAttendance.leadToPath +
          fakefakeStudentAttendanceData.id
      )
    } else {
      navigate(teacherPath.student.leadToPath + student.id)
    }
  }

  return (
    <>
      <b className="ml-1 mb-2 block">Студенты</b>
      <table className="table-auto mt-0 mb-6 ">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Посещаемость</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id} className="hover" onClick={() => nav(student)}>
              <td>{student.name}</td>
              <td>{student.per + '%'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
