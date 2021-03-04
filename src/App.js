import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCats = ['all', ... new Set(items.map((item)=> item.category))];      // new Set() brings al uniwue values

function App() {
  
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCats);

  const filterItems = (category) => {

    if(category=== 'all'){
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((i) => i.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} allCats={allCats} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
