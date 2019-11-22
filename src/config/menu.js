const menuItems = [
  {
    link: '/login',
    title: 'Авторизация',
    visible: 'public'
  },
  {
    link: '/register',
    title: 'Регистрация',
    visible: 'public'
  },
  {
    link: '/projects',
    title: 'Проекты',
    visible: 'protected'
  },
  {
    link: '/account',
    title: 'Настройки пользователя',
    visible: 'protected'
  },
  {
    link: '/logout',
    title: 'Выйти',
    visible: 'protected'
  }
];

export const getPublicMenuItems = () => {
  return menuItems.filter(item => item.visible === 'public');
};

export const getProtectedMenuItems = () => {
  return menuItems.filter(item => item.visible === 'protected');
};