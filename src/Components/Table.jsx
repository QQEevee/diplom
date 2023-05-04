import '../css/table.css'
import { tableStates } from '../constants/tableStates'
import { useNavigate } from 'react-router-dom'
import { tablePath } from '../constants/path'

export default function Table({ currentTable }) {
  const navigate = useNavigate()

  const tabledata = [
    {
      tableState: tableStates.shedule,
      headers: ['Пара', 'Дисциплина', 'Группа', 'Аудитория'],
      data: [
        { id: 1, number: '1', subject: 'ОНИ', group: 'ИС-19', cab: '521М' },
        { id: 2, number: '1', subject: 'ОНИ', group: 'ИС-19', cab: '521М' },
        { id: 3, number: '1', subject: 'ОНИ', group: 'ИС-19', cab: '521М' },
        { id: 4, number: '1', subject: 'ОНИ', group: 'ИС-19', cab: '521М' },
        { id: 5, number: '1', subject: 'ОНИ', group: 'ИС-19', cab: '521М' },
        { id: 6, number: '1', subject: 'ОНИ', group: 'ИС-19', cab: '521М' },
        { id: 7, number: '1', subject: 'ОНИ', group: 'ИС-19', cab: '521М' },
      ],
    },
    {
      tableState: tableStates.group,
      headers: ['Группа', 'Количество дисциплин'],
      data: [
        { id: 1, name: 'ИС-19', amount: 1 },
        { id: 2, name: 'ИС-19', amount: 1 },
        { id: 3, name: 'ИС-19', amount: 1 },
        { id: 4, name: 'ИС-19', amount: 1 },
        { id: 5, name: 'ИС-19', amount: 1 },
        { id: 6, name: 'ИС-19', amount: 1 },
        { id: 7, name: 'ИС-19', amount: 1 },
      ],
    },
    {
      tableState: tableStates.subject,
      headers: ['Название дисциплины', 'Количество групп'],
      data: [
        { id: 1, name: 'ОНИ', amount: 1 },
        { id: 2, name: 'ОНИ', amount: 1 },
        { id: 3, name: 'ОНИ', amount: 1 },
        { id: 4, name: 'ОНИ', amount: 1 },
        { id: 5, name: 'ОНИ', amount: 1 },
        { id: 6, name: 'ОНИ', amount: 1 },
        { id: 7, name: 'ОНИ', amount: 1 },
        { id: 8, name: 'ОНИ', amount: 1 },
      ],
    },
  ]

  function getCurrentPathLink(id) {
    let path
    Object.values(tablePath).map((p) => {
      if (p.tableState === currentTable) {
        path = p.leadToPath + '/' + id
      }
    })
    return path
  }

  return (
    <table className="table-auto">
      <thead>
        <tr className="header">
          {tabledata.map(
            (table) =>
              table.tableState === currentTable &&
              table.headers.map((header) => <th key={header}>{header}</th>)
          )}
        </tr>
      </thead>
      <tbody>
        {tabledata.map(
          (table) =>
            table.tableState === currentTable &&
            table.data.map((d, index1) => (
              <tr
                className="hover"
                onClick={() => navigate(getCurrentPathLink(d.id))}
                key={index1}
              >
                {Object.keys(d).map(
                  (key, index2) =>
                    key !== 'id' && <td key={index2}>{d[key]}</td>
                )}
              </tr>
            ))
        )}
      </tbody>
    </table>
  )
}
