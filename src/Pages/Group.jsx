import Graph from '../Components/Graph'
import SheduleDataTabel from '../Components/DataTabels/SheduleDataTabel'
import StudentDataTabel from '../Components/DataTabels/StudentDataTabel'
import SubjectDataTabel from '../Components/DataTabels/SubjectDataTabel'

export default function Group() {
  const data = {
    name: 'ИС-19',
    per: 1 / 5,
    subject: [
      { groupAttendanceId: 1, name: 'ОНИ', per: 0.5 },
      { groupAttendanceId: 2, name: 'ОНИ', per: 0.5 },
    ],
  }

  return (
    <div className="container p-4">
      <div className="text-2xl mb-2 font-bold">Группа {data.name}</div>
      <div className="text-xl mt-3">Общая посещаемость по дисциплинам:</div>
      <Graph className="w-1/4 mb-5" labelFontSize={20} per={data.per} />
      <SheduleDataTabel />
      <StudentDataTabel />
      <SubjectDataTabel />
    </div>
  )
}
