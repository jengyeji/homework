import Item from './Item.js'

const ItemList = ({ itemlist }) => {
  return (
    <ul className="ItemList" style={{ display: 'flex', justifyContent: 'center' }}>
      {itemlist.map(tem => <Item src={tem} key={tem} />)}
    </ul>
  )
};

export default ItemList;