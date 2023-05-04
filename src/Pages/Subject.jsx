import Graph from '../Components/Graph'
import SheduleDataTabel from '../Components/DataTabels/SheduleDataTabel'
import GroupDataTabel from '../Components/DataTabels/GroupDataTabel'
import TeacherDataTabel from '../Components/DataTabels/TeacherDataTabel'

export default function Subject() {
  return (
    <div className="container p-4">
      <div className="text-2xl mb-2 font-bold">
        Дисциплина Основы научных исследований
      </div>
      <div className="text-xl mt-3">Общая посещаемость по дисциплине:</div>
      <Graph className="w-1/4 mb-5" labelFontSize={20} per={1 / 5} />
      <SheduleDataTabel />
      <GroupDataTabel />
      <TeacherDataTabel />
    </div>
  )
}
