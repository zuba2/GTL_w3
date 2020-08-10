const Photo = () => {
  return(
    // <!-- Sample Wallpaper -->
    <div className="sample-wallpaper">
      {/* <!-- Wallpaper #1 --> */}
      <article className="wallpaper">
        <img src="./img/venom-1.jpg" alt="Wallpaper #1" class="wallpaper" />
      </article>

      {/* <!-- Wallpaper #2 --> */}
      <article className="wallpaper">
        <img src="./img/hulk-1.jpg" alt="Wallpaper #1" class="wallpaper" />
      </article>

      {/* <!-- Wallpaper #3 --> */}
      <article className="wallpaper">
        <img src="./img/venom-2.jpg" alt="Wallpaper #1" class="wallpaper" />
      </article>
    </div>
  );
}

export default Photo;