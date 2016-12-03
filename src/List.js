import React from 'react';
import MainNav from './MainNav';
import cn from 'classnames';
import './List.scss'
import Item from './Item';
import Pagination from './Pagination';
import ListHeader from './ListHeader';

const List = () => (
  <div>
    {/*<MainNav/>*/}
    {/*<Item item={'hello'}/>
    <Item item={'eiei'}/>
    <Item item={'oo'}/>*/}
    <div className="container">
      <ListHeader/>
      <Item data={1}/>
      <Item data={2}/>
      <Item data={3}/>
      <Pagination/>
    </div>
  </div>
);

export default List;
