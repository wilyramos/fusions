import { NavLink } from "react-router-dom";

export default function Header() {
    return (
      <header className="bg-state-800">
          <div className="container mx-auto p-4 px-16">
              <div className="flex justify-between items-center">
                  <div>
                      <img className="w-24" src="/logo.svg" alt="Logo" />
  
                  </div>
                  <nav>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 uppercase font-bold mr-4" : "uppercase mr-4"
                        }
                    >Inicio</NavLink>

                    <NavLink
                        to="/productos"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 uppercase font-bold mr-4" : "uppercase mr-4"
                        }
                    >Productos</NavLink>
  
                  </nav>
              </div>
          </div>
      </header>
    )
  }
  