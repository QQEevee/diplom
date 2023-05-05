import '../css/auth.css'

export default function Auth() {
  return (
    <div className="flex flex-column h-full flex-grow">
      <div className="auth_window">
        <h3 className="auth_header">Авторизация</h3>
        <form className="flex flex-col items-center ">
          <div className="flex mx-auto flex-col">
            <div className="subheader">Логин:</div>
            <input type="text" name="login" placeholder="s" />
            <div className="subheader">Пароль:</div>
            <input type="password" name="password" placeholder="s" />
          </div>
          <button className="auth_button" type="submit">
            Войти в систему
          </button>
        </form>
      </div>
    </div>
  )
}
