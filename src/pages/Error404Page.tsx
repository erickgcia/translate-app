import { NavLink } from 'react-router-dom'

const Error404 = () => {
  return (
    <section className="error">
      <h1>Error 404 - Page not found :(</h1>
      <NavLink to="/">Return to translate page</NavLink>
    </section>
  )
}

export default Error404
