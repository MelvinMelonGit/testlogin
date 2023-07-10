import { Outlet, NavLink } from "react-router-dom"

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav className="navbar bg-neutral text-neutral-content">
            <NavLink
                to="/"
                className="btn btn-ghost normal-case text-xl"
            >
                Home
            </NavLink>
            <NavLink to="login">Login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}