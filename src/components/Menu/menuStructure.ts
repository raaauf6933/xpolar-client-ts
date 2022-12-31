import { sectionNames } from '../../constant';
import dashboard_icon from '@assets/icons/dashboard_1.svg';
import briefcase_icon from '@assets/icons/briefcase.svg';
import folder1_icon from '@assets/icons/folder_1.svg';
import admin_icon from '@assets/icons/admin_icon.svg';

export interface ChildMenuType {
  label: string;
  url: string;
  icon?: string;
  disable?: boolean;
}

export interface MenuStructureType {
  ariaLabel: string;
  icon: string;
  label: string;
  url: string;
  childMenu?: ChildMenuType[];
  end?: boolean;
  disable?: boolean;
}

const createMenuStructure = (): MenuStructureType[] => {
  return [
    {
      ariaLabel: 'dashboard',
      disable: true,
      end: true,
      icon: dashboard_icon,
      label: sectionNames.dashboard.title,
      url: '/',
    },
    {
      ariaLabel: 'collect',
      childMenu: [
        {
          label: sectionNames.cases.title,
          url: 'cases',
        },
        {
          label: sectionNames.my_cases.title,
          url: 'my_cases',
        },
      ],
      icon: briefcase_icon,
      label: sectionNames.collect.title,
      url: '/collect',
    },
    {
      ariaLabel: 'collect',
      childMenu: [
        {
          label: sectionNames.import_cases.title,
          url: 'import_cases',
        },
        {
          label: sectionNames.import_payment.title,
          url: 'my_cases',
        },
      ],
      icon: folder1_icon,
      label: sectionNames.manage.title,
      url: '/manage',
    },
    {
      ariaLabel: 'cmr',
      childMenu: [
        {
          label: sectionNames.clients.title,
          url: 'clients',
        },
      ],
      icon: admin_icon,
      label: sectionNames.cmr.title,
      url: '/cmr',
    },
  ];
};

export default createMenuStructure;
