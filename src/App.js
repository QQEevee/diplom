import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import { authPath, tablePath, teacherPath } from './constants/path'
import { TableContext } from './Context/TableContext'

function App() {
  const [isAuth, setIsAuth] = useState(true)
  const [currentTable, setCurrentTable] = useState(null)
  return (
    <TableContext.Provider value={[currentTable, setCurrentTable]}>
      {isAuth && (
        <Menu
          setIsAuth={setIsAuth}
          currentTable={currentTable}
          setCurrentTable={setCurrentTable}
        />
      )}
      <Routes>
        {isAuth &&
          Object.values(tablePath).map((value) => (
            <Route key={value.path} path={value.path} element={value.element} />
          ))}
        {isAuth &&
          Object.values(teacherPath).map((value) => (
            <Route key={value.path} path={value.path} element={value.element} />
          ))}
        {!isAuth &&
          Object.values(authPath).map((value) => (
            <Route key={value.path} path={value.path} element={value.element} />
          ))}

        {isAuth ? (
          <Route path="*" element={<Navigate to={'/shedule'} />} />
        ) : (
          <Route path="*" element={<Navigate to={'/auth'} />} />
        )}
      </Routes>
    </TableContext.Provider>
  )
}

export default App
