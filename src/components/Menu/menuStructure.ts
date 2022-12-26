import { sectionNames } from '../../constant';
import dashboard_icon from '@assets/icons/dashboard_1.svg';
import briefcase_icon from '@assets/icons/briefcase.svg';
import folder1_icon from '@assets/icons/folder_1.svg';
import admin_icon from '@assets/icons/admin_icon.svg';

export interface ChildMenuType {
  label: string;
  url: string;
  icon?: string;
}

export interface MenuStructureType {
  ariaLabel: string;
  icon: string;
  label: string;
  url: string;
  childMenu?: ChildMenuType[];
  end?: boolean;
}

const createMenuStructure = (): MenuStructureType[] => {
  return [
    {
      ariaLabel: 'dashboard',
      end: true,
      icon: dashboard_icon,
      label: sectionNames.dashboard.title,
      url: '/',
    },
    {
      ariaLabel: 'collect',
      childMenu: [
        {
          label: 'Cases',
          url: 'cases',
        },
        {
          label: 'My Cases',
          url: 'my_cases',
        },
      ],
      icon: briefcase_icon,
      label: sectionNames.collect.title,
      url: '/collect',
    },
    {
      ariaLabel: 'collect',
      icon: folder1_icon,
      label: sectionNames.manage.title,
      url: '/manage',
    },
    {
      ariaLabel: 'cmr',
      icon: admin_icon,
      label: sectionNames.cmr.title,
      url: '/cmr',
    },
  ];
};

export default createMenuStructure;
