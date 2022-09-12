import { BsFillSunFill } from 'react-icons/bs'

const Header = () => {
  return (
    <header className="navbar justify-between bg-base-100 p-0">
      <a className="btn btn-ghost normal-case text-xl">Textme</a>
      <button className="btn btn-square btn-ghost">
        <BsFillSunFill />
      </button>
    </header>
  )
}

export default Header
