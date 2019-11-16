import React from 'react';

import Link from '../ui-kit/Link';
import { getPublicMenuItems, getProtectedMenuItems } from '../../config/menu';

import './styles.styl';

const Menu = ({ isLogged }) => {
  const items = isLogged ? getProtectedMenuItems() : getPublicMenuItems();

  return (
    <div className="main-menu">{ items.map(
      item => <div key={`menu-item-wrapper-${item.link}`}><Link link={item.link} text={item.title} /></div>
    ) }
    </div>
  );
};

export default Menu;