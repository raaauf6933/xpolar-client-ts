import React, { useState } from 'react';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';
import arrowdown_icon from '@assets/icons/arrow_down.svg';
import { MenuStructureType } from '../../menuStructure';
import { NavLink } from 'react-router-dom';

const SubMenu: React.FC<MenuStructureType> = (props) => {
  const { childMenu, label, icon } = props;
  const [open, setOpen] = useState(true);

  return (
    <li>
      <button
        type="button"
        className="group flex  w-full items-center  p-2 text-base font-normal text-slate-700 hover:border-b-2"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <ReactSVG className="w-6" src={icon} />
        <span className="ml-3 flex-1  whitespace-nowrap text-left">
          {label}
        </span>
        <ReactSVG className="w-6" src={arrowdown_icon} />
      </button>
      <ul
        className={classNames('space-y-2 py-2', {
          hidden: !open,
        })}
      >
        {childMenu?.map((subMenu, index) => (
          <li key={index}>
            <NavLink
              to={subMenu.url}
              className={({ isActive }) =>
                classNames(
                  'group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-slate-700 hover:bg-slate-300 hover:text-white',
                  {
                    ['bg-slate-300 text-white']: isActive,
                  },
                )
              }
              onClick={(e) => subMenu.disable && e.preventDefault()}
            >
              {subMenu.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubMenu;
