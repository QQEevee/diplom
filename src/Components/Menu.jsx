import { Link, useLocation } from 'react-router-dom'
import { tableStates } from '../constants/tableStates'
import { tablePath } from '../constants/path'
import '../css/menu.css'
import loupe from '../icons/magnifier-1_icon-icons.com_56924.svg'
import { useContext } from 'react'
import { TableContext } from '../Context/TableContext'
import { useEffect } from 'react'

export default function Menu({ setIsAuth }) {
  const [currentTable, setCurrentTable] = useContext(TableContext)
  let first = false
  const location = useLocation()
  useEffect(() => {
    let isTableLoc = false
    Object.values(tablePath).map((table) => {
      if (table.path === location.pathname) {
        isTableLoc = true
        setCurrentTable(table.tableState)
      }
    })
    !isTableLoc && setCurrentTable(null)
  }, [location])

  useEffect(() => {
    first = !first
    if (first) {
      console.log()
    }
  }, [])

  return (
    <ul className="menu flex items-center">
      <Link to={tablePath.shedule.path}>
        <li
          className={
            'menu_button' +
            (currentTable === tableStates.shedule ? ' active' : '')
          }
        >
          Расписание
        </li>
      </Link>
      <Link to={tablePath.group.path}>
        <li
          className={
            'menu_button' +
            (currentTable === tableStates.group ? ' active' : '')
          }
        >
          Группы
        </li>
      </Link>

      <Link to={tablePath.subject.path}>
        <li
          className={
            'menu_button' +
            (currentTable === tableStates.subject ? ' active' : '')
          }
        >
          Дисциплины
        </li>
      </Link>
      <li className="search relative">
        <img alt="" src={loupe} className="absolute icon w-4 h-4" />
        <input type="text" name="name" placeholder="Поиск..." />
      </li>
      <li className="auth">
        <div className="auth_user">Пользователь: Андрей</div>
        <div className="auth_button" onClick={() => setIsAuth((prev) => !prev)}>
          Выйти
        </div>
      </li>
    </ul>
  )
}
