import React from 'react';
import { SortableTable } from './SortableTable';

import './style.scss';

const items: { id: number; userId: number; title: string }[] = [
  {
    id: 1,
    userId: 102,
    title:
      'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, explicabo.',
  },
  {
    id: 2,
    userId: 99,
    title:
      'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
  },
  {
    id: 3,
    userId: 123,
    title: 'Quis autem vel eum iure reprehenderit',
  },
  {
    id: 4,
    userId: 104,
    title:
      'At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti',
  },
];

export const HomeWork3 = () => {
  return (
    <div className="home-work_block">
      <span>Решение домашнего задания №3</span>
      <SortableTable rows={items} />
    </div>
  );
};
