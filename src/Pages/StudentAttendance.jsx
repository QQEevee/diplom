import StudentAttendanceDataTabel from '../Components/DataTabels/StudentAttendanceDataTabel'
import Graph from '../Components/Graph'

export default function StudentAttendance() {
  return (
    <div className="container p-4">
      <div className="text-2xl mb-2 font-bold">
        Посещаемость Захарова Максима Олеговича, дисциплина: Основы научных
        исследований
      </div>
      <div className="text-xl mt-3">Общая посещаемость по дисциплине:</div>
      <Graph className="w-1/4 mb-5" labelFontSize={20} per={1 / 5} />
      <StudentAttendanceDataTabel />
    </div>
  )
}
