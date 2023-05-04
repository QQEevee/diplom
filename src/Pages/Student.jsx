import SubjectDataTabel from '../Components/DataTabels/SubjectDataTabel'
import Graph from '../Components/Graph'

export default function Student() {
  return (
    <div className="container p-4">
      <div className="text-2xl mb-2 font-bold">
        Студент Захаров Максим Олегович, Группа: ИС-19
      </div>
      <div className="text-xl mt-3">Общая посещаемость по дисциплинам:</div>
      <Graph className="w-1/4 mb-5" labelFontSize={20} per={1 / 5} />
      <SubjectDataTabel studentId={1} />
    </div>
  )
}
