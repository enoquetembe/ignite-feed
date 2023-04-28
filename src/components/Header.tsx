import Logo from '../assets/Ignite-symbol.svg' 

export function Header() {
  return (
    <header className="flex items-center justify-center py-4 bg-gray-2">
        <img src={Logo} alt="Iginte's logo" className='h-8'/>
    </header>
  )
}
