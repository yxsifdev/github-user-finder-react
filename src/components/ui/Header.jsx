import GitHubIcon from "@icons/GitHubIcon";

function Header() {
  return (
    <header className="flex items-center justify-between max-w-5xl px-3 py-5 mx-auto my-0">
      <div className="flex items-center gap-4">
        <GitHubIcon width="35" height="35" />
        <h1 className="text-2xl font-bold">Usuarios en GitHub</h1>
      </div>
      <nav>
        <ul className="flex gap-5">
          <li className="">
            <a
              href="#"
              className="text-lg transition text-white/60 hover:text-white"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg transition text-white/60 hover:text-white"
            >
              Repositorio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg transition text-white/60 hover:text-white"
            >
              Discord
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
