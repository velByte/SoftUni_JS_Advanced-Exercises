class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = Number(warehouseSpace);
    this.products = new Map();
    this.sales = new Map();
  }
  loadingStore(product, quantity, spaceRequired) {
    spaceRequired = Number(spaceRequired);
    quantity = Number(quantity);
    if (spaceRequired > this.warehouseSpace) {
      throw new Error("Not enough space in the warehouse.");
    }
    this.products.set(product, quantity);
    this.warehouseSpace -= spaceRequired;
    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minimalQuantity) {
    minimalQuantity = Number(minimalQuantity);

    if (!this.products.has(product)) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    if (minimalQuantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    let productQuantity = this.products.get(product);

    if (productQuantity >= minimalQuantity) {
      return `You have enough from product ${product}.`;
    }

    let difference = minimalQuantity - productQuantity;
    productQuantity = minimalQuantity;

    return `You added ${Math.abs(
      difference
    )} more from the ${product} products.`;
  }

  sellProduct(product) {
    if (!this.products.has(product)) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
  
    let currentProductQuantity = this.products.get(product);
    currentProductQuantity--;
    if (currentProductQuantity <= 0) {
      this.products.delete(product);
    } else {
      this.products.set(product, currentProductQuantity);
    }
  
    if (this.sales.has(product)) {
      let currentSold = this.sales.get(product);
      this.sales.set(product, currentSold + 1);
    } else {
      this.sales.set(product, 1);
    }
  
    return `The ${product} has been successfully sold.`;
  }
  revision() {
    if (this.sales.size == 0) {
      throw new Error("There are no sales today!");
    }

    let soldTotal = 0;
    this.sales.forEach((value, key) => {
      soldTotal += value;
    });

    let str = `You sold ${soldTotal} products today!`;
    str += `\nProducts in the warehouse:\n`;
    let keys = Array.from(this.products.keys());

    keys.forEach((key, index) => {
      str += `${key}-${this.products.get(key)} more left`;

      if (index !== keys.length - 1) {
        str += "\n";
      }
    });
    return str;
  }
}

