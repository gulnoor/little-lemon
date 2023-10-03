const MenuList = ({ menu, category }) => {
    return (
      <ol className="menu-list">
        {menu.map((item) => {
          if (item.category === category || category === "All") {
            return (
              <li >
                <div className="menu-item">
                  <img alt={item.name} src={item.image}></img>
                  <div className="item-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </li>
            );
          }
          return null;
        })}
      </ol>
    );
  };
  export default MenuList;