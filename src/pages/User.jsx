import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/ui/Header";
import HeaderUser from "@/components/ui/HeaderUser";
import UserCard from "@/components/ui/UserCard";

function UserPage() {
  const { username } = useParams();
  const [users, setUsers] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/search/users?q=${username}`
        );
        const userData = await userResponse.json();

        const userDetails = await Promise.all(
          userData.items.map(async (user) => {
            try {
              const response = await fetch(user.url);
              if (response.ok) {
                return response.json();
              } else {
                throw new Error(
                  `Failed to fetch details for user ${user.login}`
                );
              }
            } catch (error) {
              console.error(error);
              return null;
            }
          })
        );

        const filteredUserDetails = userDetails.filter((user) => user !== null);
        const orgResponse = await fetch(
          `https://api.github.com/search/users?q=${username}+type:org`
        );
        const orgData = await orgResponse.json();
        const uniqueUsers = filteredUserDetails.filter(
          (user) => !orgData.items.some((org) => org.login === user.login)
        );

        setUsers(uniqueUsers);
        setOrgs(orgData.items);
        setError(null);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError("Error al cargar los resultados de búsqueda.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [username]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="max-w-5xl my-0 mx-auto py-10 px-3">
          <div>{error}</div>
          <br />
          <Link to="/">Volver al inicio</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <HeaderUser />
      <main className="max-w-5xl my-0 mx-auto py-10 px-3">
        <h1>Resultados para "{username}"</h1>

        {users.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-3">Usuarios:</h2>
            <div className="flex flex-wrap gap-5 justify-start">
              {users.map((user) => (
                <UserCard
                  key={user.login}
                  userName={user.name || "Nombre no disponible"}
                  userLogin={user.login}
                  userAvatar={user.avatar_url}
                  url={user.html_url}
                />
              ))}
            </div>
          </>
        )}

        {orgs.length > 0 && (
          <>
            <h2 className="text-2xl font-bold my-3">Organizaciones:</h2>
            <div className="flex flex-wrap gap-5 justify-start">
              {orgs.map((org) => (
                <UserCard
                  key={org.id}
                  userName={org.login || "Nombre no disponible"}
                  userLogin={org.login}
                  userAvatar={org.avatar_url}
                  url={org.html_url}
                  type="Organización"
                />
              ))}
            </div>
          </>
        )}

        {users.length === 0 && orgs.length === 0 && (
          <p>No se encontraron usuarios ni organizaciones para "{username}".</p>
        )}

        <Link to="/">Volver al inicio</Link>
      </main>
    </>
  );
}

export default UserPage;
