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
  }
];

export const getPublicMenuItems = () => {
  return menuItems.filter(item => item.visible === 'public');
};