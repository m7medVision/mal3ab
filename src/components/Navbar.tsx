import { Button } from './ui/button'

export default function Navbar() {
  return (
    <nav className="flex justify-around py-4">
      <ul className="flex content-center items-end">
        <li className="mr-6">
          <a className="text-3xl font-bold" href="/">
            Mal3ab
          </a>
        </li>
      </ul>
      <Button>Login</Button>
    </nav>
  )
}
