import GitHubIcon from "@icons/GitHubIcon";
import Search from "../Search";

function HeaderUser() {
  return (
    <header className="flex items-center justify-between max-w-5xl px-3 py-5 mx-auto my-0">
      <div className="flex items-center gap-4">
        <GitHubIcon width="35" height="35" />
        <h1 className="text-2xl font-bold">Usuarios en GitHub</h1>
      </div>
      <Search />
    </header>
  );
}

export default HeaderUser;
