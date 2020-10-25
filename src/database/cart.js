//jshint esversion:6
module.exports = function Cart(oldCart){

    //initialize the cart
    this.items = oldCart.items || {}; 
    this.totalQty = oldCart.totalQty || {}; 

    this.totalPrice = oldCart.totalPrice || {}; 

    //add new items to the cart by creating an add function
    this.add = function(item, id){
      var storedItem = this.items[id];

      //add a new product
      if(!storedItem){
            
          storedItem =  {item: item, qty: 1, price: 0};
          this.items[id] = storedItem;
          
      } else {
        //add quantity  to an existing product
         storedItem.qty++;
         storedItem.price = storedItem.item.price * storedItem.qty;
         this.totalQty++;
         this.totalPrice += storedItem.item.price;
      }
    };


    this.generateArray = function() {
      var array = [];

      for(var id in this.items){
          array.push(this.items[id]);
      }
      return array;
    }

};