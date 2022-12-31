import React from 'react';
import { ReactSVG } from 'react-svg';

import SubMenu from './components/SubMenu';
import createMenuStructure from './menuStructure';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface MenuProps {
  children?: React.ReactNode;
}

const Menu: React.FC<MenuProps> = () => {
  const menuStructure = createMenuStructure();

  return (
    <aside className="w-72 grow-[1] border border-solid border-slate-200 bg-slate-50">
      <div className="py-4 px-3">
        <ul className="space-y-2">
          {menuStructure.map((menu, index) =>
            menu?.childMenu ? (
              <SubMenu key={index} {...menu} />
            ) : (
              <li key={index}>
                <NavLink
                  to={menu.url}
                  onClick={(e) => menu.disable && e.preventDefault()}
                  className={({ isActive }) =>
                    classNames(
                      'flex items-center rounded-lg p-2 text-base font-normal text-slate-700 hover:bg-slate-300 hover:text-white',
                      {
                        [' cursor-not-allowed text-slate-200']: menu.disable,
                        ['bg-slate-300 text-white']: isActive,
                      },
                    )
                  }
                  end={menu.end}
                >
                  <ReactSVG className="w-6" src={menu.icon} />
                  <span className="ml-3">{menu.label}</span>
                </NavLink>
              </li>
            ),
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Menu;
