import * as React from 'react';

const NavBar: React.FC = () => {
  return (
    <div className="absolute w-full bg-neutral-800 p-7">
      <div className="mx-auto flex flex-wrap justify-end">
        <span className="font-bold text-slate-300">Mark Joseph Dyauco</span>
      </div>
    </div>
  );
};

export default NavBar;
