function FlowerLists(props) {
  function clickHandler() {
    console.log("Clicked");
    console.log(props.text);
  }

  return (
    <div>
      <h1> Flowers Lists </h1>
      <div className='card'>
        <h1>{props.text}</h1>
        <button
          className='btn'
          onClick={clickHandler}>
          {"Buy Now"}
        </button>
      </div>
    </div>
  );
}

export default FlowerLists;
