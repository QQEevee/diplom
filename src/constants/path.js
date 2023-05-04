import Auth from '../Pages/Auth'
import Main from '../Pages/Main'
import { tableStates } from './tableStates'
import Group from '../Pages/Group'
import GroupAttendance from '../Pages/GroupAttendance'
import Subject from '../Pages/Subject'
import Student from '../Pages/Student'
import StudentAttendance from '../Pages/StudentAttendance'
import SheduleAttendance from '../Pages/SheduleAttendance'

export const tablePath = {
  group: {
    path: '/groups',
    element: <Main currentTable={tableStates.group} />,
    tableState: tableStates.group,
    leadToPath: '/group',
  },
  shedule: {
    path: '/shedule',
    element: <Main currentTable={tableStates.shedule} />,
    tableState: tableStates.shedule,
    leadToPath: '/sheduleattendance',
  },
  subject: {
    path: '/subjects',
    element: <Main currentTable={tableStates.subject} />,
    tableState: tableStates.subject,
    leadToPath: '/subject',
  },
}

export const teacherPath = {
  student: {
    path: 'student/:id',
    element: <Student />,
    leadToPath: '/student/',
  },
  studentAttendance: {
    path: 'studentattendance/:id',
    element: <StudentAttendance />,
    leadToPath: '/studentattendance/',
  },
  group: {
    path: 'group/:id',
    element: <Group />,
    tableState: tableStates.group,
  },
  subject: {
    path: 'subject/:id',
    element: <Subject />,
  },
  groupAttendance: {
    path: 'groupattendance/:id',
    element: <GroupAttendance />,
    leadToPath: '/groupattendance/',
  },
  shedule: {
    path: 'sheduleattendance/:id',
    element: <SheduleAttendance />,
    leadToPath: '/sheduleattendance/',
  },
}

export const authPath = {
  auth: {
    path: '/auth',
    element: <Auth />,
  },
}
