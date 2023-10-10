const MainImage = ({ src, handlerRightClick }) => {
  return (
    <div className="main_image">
      <img src={src} alt="신발사진" />
      <button onClick={handlerRightClick}>❤</button>
    </div>
  );
}

export default MainImage;