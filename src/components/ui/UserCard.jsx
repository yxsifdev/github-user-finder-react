import React from "react";

function UserCard({ userLogin, userName, userAvatar, type, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex bg-transparent hover:bg-primary border-2 border-primary gap-5 p-4 w-[300px] rounded-lg shadow-md transition-colors"
    >
      <img
        src={userAvatar}
        alt={`${userName || userLogin}'s avatar`}
        className="object-cover w-20 h-20 rounded-full"
      />
      <div>
        <h2 className="text-xl font-semibold">
          {userName || "Nombre no disponible"}
        </h2>
        <p className="text-gray-600">{userLogin}</p>
        {type && <p className="text-sm italic text-gray-500">{type}</p>}
      </div>
    </a>
  );
}

export default UserCard;
