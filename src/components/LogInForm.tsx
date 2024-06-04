const LogInForm = ({
  setIsLogged,
}: {
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleSubmit = () => {
    setIsLogged(true)
  }

  return (
    <article className="center">
      <form onSubmit={handleSubmit} className="login">
        <h1 className="login__title">Login</h1>
        <label htmlFor="user">
          {' '}
          Username:
          <input className="login__input" type="text" name="user" id="user" />
        </label>
        <label htmlFor="password">
          {' '}
          Password:
          <input
            className="login__input"
            type="password"
            name="password"
            id="password"
          />
        </label>
        <button className="login__btn" type="submit">
          Login
        </button>
      </form>
    </article>
  )
}

export default LogInForm
