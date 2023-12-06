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
      quantity: Number(),
    },
    {
      id: self.crypto.randomUUID(),
      image: "images/aplus-media.jpg",
      title: "Đồ chơi trẻ em",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 20,
      remainingAmount: 0,
      outOfStock: true,
      quantity: Number(),
    },
    {
      id: self.crypto.randomUUID(),
      image: "images/robo_fig_combo.jpg",
      title: "Robot Biến hình",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 14,
      remainingAmount: 10,
      outOfStock: false,
      quantity: Number(),
    },
    {
      id: self.crypto.randomUUID(),
      image: "images/target-leap-frog.jpg",
      title: "Con sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 8,
      remainingAmount: 8,
      outOfStock: false,
      quantity: Number(),
    },
  ],
};

function redeucer(state = initState, action) {
  switch (action.type) {
    case "":
      break;

    default:
      return state;
  }
}

export default redeucer;
