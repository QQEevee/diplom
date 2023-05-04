import SheduleDataTabel from '../Components/DataTabels/SheduleDataTabel'
import StudentDataTabel from '../Components/DataTabels/StudentDataTabel'
import Graph from '../Components/Graph'

export default function GroupAttendance() {
  const groupAttendanceData = {
    groupName: 'ИС-19',
    subjectName: 'ОНИ',
    rating: 5 / 10,
  }

  return (
    <div className=" container p-4">
      <div className="text-2xl mb-2 font-bold">
        Посещаемость группы {groupAttendanceData.groupName} по дисциплине{' '}
        {groupAttendanceData.subjectName}
      </div>
      <Graph className="w-1/4 mb-5" labelFontSize={20} per={1 / 5} />
      <SheduleDataTabel />
      <StudentDataTabel subjectId={1} />
    </div>
  )
}
