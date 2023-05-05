export default function TeacherDataTabel() {
  const data = [
    { id: 1, name: 'Добрынин Алексей Сергеевич', department: 'ИА' },
    { id: 2, name: 'Добрынин Алексей Сергеевич', department: 'ИА' },
    { id: 3, name: 'Добрынин Алексей Сергеевич', department: 'ИА' },
    { id: 4, name: 'Добрынин Алексей Сергеевич', department: 'ИА' },
    { id: 5, name: 'Добрынин Алексей Сергеевич', department: 'ИА' },
    { id: 6, name: 'Добрынин Алексей Сергеевич', department: 'ИА' },
    { id: 7, name: 'Добрынин Алексей Сергеевич', department: 'ИА' },
    { id: 8, name: 'Добрынин Алексей Сергеевич', department: 'ИА' },
    { id: 9, name: 'Добрынин Алексей Сергеевич', department: 'ИА' },
  ]

  return (
    <>
      <b className="ml-1 mb-2 block">Преподаватели</b>
      <table className="table-auto mt-0 mb-6 ">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Кафедра</th>
          </tr>
        </thead>
        <tbody>
          {data.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
