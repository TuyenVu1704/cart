import { useSelector } from "react-redux";
import Product from "../Product";

function ListProducts() {
  const dataProduct = useSelector((state) => state.product);

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {/* PRODUCT : START */}
            {dataProduct.map((item) => {
              return <Product key={item.id} data={item} />;
            })}
            {/* PRODUCT : END */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
