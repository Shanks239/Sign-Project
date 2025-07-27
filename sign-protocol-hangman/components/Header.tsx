import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-orange-500 to-yellow-500 p-6 sm:p-8 text-center relative overflow-hidden">
      <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3e%3ccircle cx='25' cy='25' r='1' fill='rgba(255,255,255,0.1)'/%3e%3ccircle cx='75' cy='75' r='1' fill='rgba(255,255,255,0.1)'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grain)'/%3e%3c/svg%3e")] opacity-50`}></div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-shadow-lg relative z-10">
        👑 Sign Protocol Hangman 👑
      </h1>
      <p className="text-white/90 mt-2 text-base sm:text-lg font-medium relative z-10">
        Master the vocabulary of Sign Protocol and the world of attestations
      </p>
    </header>
  );
};