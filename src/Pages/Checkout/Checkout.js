import React, {Component} from 'react';
import CartItem from "./CartItem";
import Cart from "./Cart";
import swal from 'sweetalert';
class Checkout extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      carts : [],
     
    };
  }

    componentDidMount()
    {
      const OldCart = localStorage.getItem('Cart') ? localStorage.getItem('Cart') : [];
      const ArrayCart = JSON.parse(OldCart);
      this.setState({
        carts : ArrayCart,
      });
    }

    OnChangeQuantity = (value, index) =>{
      // console.log(value);
      // console.log(index);
    //  var {carts} = this.state;
       var Cart = JSON.parse(localStorage.getItem('Cart'));
      if(Cart.length >0)
      {
        if(value !== -1)
        {
          Cart[index].quantity =Cart[index].quantity + value;
          localStorage.setItem("Cart", JSON.stringify(Cart));
          this.setState({
            carts: localStorage.setItem("Cart", JSON.stringify(Cart))
          });
        }
        else
        {
          if(Cart[index].quantity === 1)
          {
            swal("Không thể giảm được nữa!");
          }
          else
          {
            Cart[index].quantity =Cart[index].quantity + value;
            localStorage.setItem("Cart", JSON.stringify(Cart));
            this.setState({
              carts: JSON.parse(localStorage.getItem("Cart"))
            });
          }
        }
      }
    }

    OnDelete = index =>{
        var Cart = JSON.parse(localStorage.getItem('Cart'));
        Cart.splice(index,1);
        localStorage.setItem("Cart", JSON.stringify(Cart));
      this.setState({
        carts: JSON.parse(localStorage.getItem("Cart"))
      }, ()=>swal("Đã Xóa!", "Kiểm tra lại giỏ hàng!", "success"));
    }
    ShowCart = (carts)=>{
      var result = null;
      if(carts.length > 0)
      {
        result=carts.map((cart, index)=>{
          return (
            <CartItem key={index} 
            cart={cart} 
            index={index}
             OnChangeQuantity = {this.OnChangeQuantity}
             OnDelete= {this.OnDelete} />
          )
        });
      }
      return result;
    }
  
  render()
  {
      //var {carts, quantity} = this.state;
      var carts = JSON.parse(localStorage.getItem('Cart'));
      var quantity = JSON.parse(localStorage.getItem('Cart')).length;
        return(
            <div className="privacy">
            <div className="container">
             
              <h3 className="tittle-w3l">Kiểm Tra
                <span className="heading-style">
                  <i />
                  <i />
                  <i />
                </span>
              </h3>
            
              <div className="checkout-right">
                <h4>Giỏ Hàng Của Bạn:
                  <span>{quantity} Sản Phẩm</span>
                </h4>
                <Cart> {this.ShowCart(carts)} </Cart>
              </div>
              {/* <div className="checkout-left">
                <div className="address_form_agile">
                  <h4>Add a new Details</h4>
                  <form action="payment.html" method="post" className="creditly-card-form agileinfo_form">
                    <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                      <div className="information-wrapper">
                        <div className="first-row">
                          <div className="controls">
                            <input className="billing-address-name" type="text" name="name" placeholder="Full Name" required />
                          </div>
                          <div className="w3_agileits_card_number_grids">
                            <div className="w3_agileits_card_number_grid_left">
                              <div className="controls">
                                <input type="text" placeholder="Mobile Number" name="number" required />
                              </div>
                            </div>
                            <div className="w3_agileits_card_number_grid_right">
                              <div className="controls">
                                <input type="text" placeholder="Landmark" name="landmark" required />
                              </div>
                            </div>
                            <div className="clear"> </div>
                          </div>
                          <div className="controls">
                            <input type="text" placeholder="Town/City" name="city" required />
                          </div>
                          <div className="controls">
                            <select className="option-w3ls">
                              <option>Select Address type</option>
                              <option>Office</option>
                              <option>Home</option>
                              <option>Commercial</option>
                            </select>
                          </div>
                        </div>
                        <button className="submit check_out">Delivery to this Address</button>
                      </div>
                    </div>
                  </form>
                  <div className="checkout-right-basket">
                    <a href="payment.html">Make a Payment
                      <span className="fa fa-hand-o-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div> */}
            </div>
          </div>
	 
        );
    }
  }

export default Checkout;