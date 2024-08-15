import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "") return;
    console.log("Usuario buscado:", user);
    navigate(`/user/${user}`, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        className="p-3 border rounded outline-none bg-white/10 border-white/10 focus:border-primary"
        placeholder="Buscar usuario..."
      />
      <button
        type="submit"
        className="px-4 py-3 font-semibold rounded bg-primary"
      >
        Buscar
      </button>
    </form>
  );
}

export default Search;
