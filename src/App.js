import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// set to set all the unique values
const allCategories = ['all',...new Set(items.map((item)=>item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category=== "all"){
      // passing all where all is seen all items will display
      setMenuItems(items)  
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    // newItems means selected items
     setMenuItems(newItems);  
  }
 



  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}  />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;