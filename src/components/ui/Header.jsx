import GitHubIcon from "@icons/GitHubIcon";

function Header() {
  return (
    <header className="max-w-5xl my-0 mx-auto flex justify-between items-center py-5 px-3">
      <div className="flex items-center gap-4">
        <GitHubIcon width="35" height="35" />
        <h1 className="text-2xl font-bold">Usuarios en GitHub</h1>
      </div>
      <nav>
        <ul className="flex gap-5">
          <li className="">
            <a
              href="#"
              className="text-lg text-white/60 hover:text-white transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg text-white/60 hover:text-white transition"
            >
              Repositorio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg text-white/60 hover:text-white transition"
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
