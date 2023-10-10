const Item = ({ src }) => {
  return (
    <li style={{ padding: 15 }}>
      <img src={src}
        alt='신발이미지'
        width="350"
      />
      <div>
        <p> 상품 명</p>
      </div>
    </li>
  )
};

export default Item;