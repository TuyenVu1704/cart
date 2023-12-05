const initState = {
  product: [
    {
      id: self.crypto.randomUUID(),
      image: "images/aplusautomation.jpg",
      title: "Thu Nhoi bong bach tuoc xanh",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 12,
      remainingAmount: 5,
      outOfStock: false,
    },
    {
      id: self.crypto.randomUUID(),
      image: "images/aplus-media.jpg",
      title: "Đồ chơi trẻ em",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 20,
      remainingAmount: 3,
      outOfStock: true,
    },
    {
      id: self.crypto.randomUUID(),
      image: "images/robo_fig_combo.jpg",
      title: "Robot Biến hình",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 14,
      remainingAmount: 5,
      outOfStock: false,
    },
    {
      id: self.crypto.randomUUID(),
      image: "images/target-leap-frog.jpg",
      title: "Con sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 8,
      remainingAmount: 5,
      outOfStock: false,
    },
  ],
};

function redeucer(state = initState, action) {
  console.log(action.payload);
  return state;
}

export default redeucer;
