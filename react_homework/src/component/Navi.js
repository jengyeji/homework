const Navi = () => {
  const navi = ['NewProduct', 'Women', 'Man', 'Sale', 'MyPage'];
  const navi_var = navi.map(na => <li>{na}</li>);
  return (
    <div className='navi-bar'>
      <ul className="navi">{navi_var}</ul>
    </div>
  )
};

export default Navi;