import { Link, useLocation } from 'react-router-dom'
import { tableStates } from '../constants/tableStates'
import { tablePath } from '../constants/path'
import '../css/menu.css'
import loupe from '../icons/magnifier-1_icon-icons.com_56924.svg'
import { useContext, useState } from 'react'
import { TableContext } from '../Context/TableContext'
import { useEffect } from 'react'

export default function Menu({ setIsAuth }) {
  const [currentTable, setCurrentTable] = useContext(TableContext)
  const [isFocused, setIsFocused] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => console.log(search), [search])

  const data = {
    groups: [{id: 1, name: 'ИС-19'}, {id: 2, name: 'ИС-19'}, {id: 3, name: 'ИС-19'}, {id: 4, name: 'ИС-19'}, ],
    subjects: [{id: 1, name: 'ОНИ'}, {id: 2, name: 'ОГНИ'}, {id: 3, name: 'ОНИГИРИ'}, {id: 4, name: 'ОБЛА'}, ],
  }

  function matchSearch(){
    
  }

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
        <input 
          autoComplete='off'
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          type="text" 
          onBlur={() => setIsFocused(false)} 
          onFocus={() => setIsFocused(true)} 
          name="name" 
          placeholder="Поиск..." 
        />
        {search.length > 0 && isFocused &&<ul>
          <li>1 JJYB JJYB JJYBJJYBJJYBJJYBJJYBJJYB JJYBdaswda</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>}
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
