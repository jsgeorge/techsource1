import React from "react";
import moment from "moment/moment.js";
//import Moment from "react-moment";
// const renderDate = dte => {
//   <Moment format="MM-DD-YYYY">{dte}</Moment>;
// };
const PurchaseHistory = props => {
  const showHistory = () =>
    props.products
      ? props.products.map((item, i) => (
          <tr className="user_product_block" key={i}>
            {<td>{moment(item.dateOfPurchase).format("MM-DD-YYYY")}</td>}
            {/* <td>{renderDate(item.dateOfPurchase)}</td> */}
            <td>
              {item.brand} {item.name}
            </td>
            <td>
              <span className="mobile">Price:</span>${item.price}
            </td>
            <td>
              <span className="mobile">Qty:</span>
              {item.quantity}
            </td>
            <td>
              {" "}
              <span className="mobile">Total:</span>
              {item.price * item.quantity}
            </td>
          </tr>
        ))
      : null;
  return (
    <div className="history_blocks">
      {props.products.length === 0 ? <div>No purchase history</div> : null}
      <table>
        <thead className="desktop tablet">
          <tr>
            <th>Purchase Date</th>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        {showHistory()}
      </table>
    </div>
  );
};

export default PurchaseHistory;
