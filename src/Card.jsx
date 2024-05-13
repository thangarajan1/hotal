import React from "react";
import { useCart } from "react-use-cart";

export default function Card() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center mt-5">Your Card is empty</h1>;
  return (
    <>
      <div className="py-5 container">
        <div className="row">
          <div className="col-12">
            <h3>
              Cart ({totalUniqueItems}) Total Items ({totalItems})
            </h3>
            <div>Total Price : {cartTotal}</div>
            <table className="table table-light table-hover m-0">
              {items.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>
                        <img src={item.img} alt="" style={{ height: "6rem" }} />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="btn btn-danger ms-2"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="btn btn-info ms-2"
                        >
                          +
                        </button>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn btn-danger ms-2"
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
