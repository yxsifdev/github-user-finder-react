import GitHubIcon from "@icons/GitHubIcon";
import Search from "../Search";

function HeaderUser() {
  return (
    <header className="max-w-5xl my-0 mx-auto flex justify-between items-center py-5 px-3">
      <div className="flex items-center gap-4">
        <GitHubIcon width="35" height="35" />
        <h1 className="text-2xl font-bold">Usuarios en GitHub</h1>
      </div>
      <Search />
    </header>
  );
}

export default HeaderUser;
