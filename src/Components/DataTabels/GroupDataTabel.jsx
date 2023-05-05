import { useNavigate } from 'react-router-dom'
import { teacherPath } from '../../constants/path'

export default function GroupDataTabel() {
  const navigate = useNavigate()

  const groupData = [
    { groupAttendanceId: 1, name: 'ИС-19', per: 0.5 },
    { groupAttendanceId: 2, name: 'ИС-19', per: 0.5 },
    { groupAttendanceId: 3, name: 'ИС-19', per: 0.5 },
    { groupAttendanceId: 4, name: 'ИС-19', per: 0.5 },
    { groupAttendanceId: 5, name: 'ИС-19', per: 0.5 },
    { groupAttendanceId: 6, name: 'ИС-19', per: 0.5 },
    { groupAttendanceId: 7, name: 'ИС-19', per: 0.5 },
    { groupAttendanceId: 8, name: 'ИС-19', per: 0.5 },
    { groupAttendanceId: 9, name: 'ИС-19', per: 0.5 },
  ]
  return (
    <>
      <b className="ml-1 mb-2 block">Группы</b>
      <table className="table-auto mt-0 mb-6 ">
        <thead>
          <tr>
            <th>Название</th>
            <th>Посещаемость</th>
          </tr>
        </thead>
        <tbody>
          {groupData.map((group) => (
            <tr
              key={group.groupAttendanceId}
              onClick={() =>
                navigate(
                  teacherPath.groupAttendance.leadToPath +
                    group.groupAttendanceId
                )
              }
              className="hover"
            >
              <td>{group.name}</td>
              <td>{group.per}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
