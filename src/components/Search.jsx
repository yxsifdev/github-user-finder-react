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
        className="bg-white/10 rounded p-3 border border-white/10 focus:border-primary outline-none"
        placeholder="Buscar usuario..."
      />
      <button
        type="submit"
        className="bg-primary font-semibold py-3 px-4 rounded"
      >
        Buscar
      </button>
    </form>
  );
}

export default Search;
