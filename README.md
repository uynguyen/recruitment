# Challenge instruction

## Data
* `orders.json`: an array of documents. Each document represents an order, with information about the orders (address, etc.) and the ordered item. The real data size will be substantial ( ~100 MB)

## Objective
Write a JavaScript program, `count-sku.js` that loads `orders.json`, takes a *string* as input for *sku*, and output **the number of times that the item with the inputted sku is ordered**. E.g.:

    $ node count-sku.js 1330
    13 times

The `order_items` array in each document in `orders.json` is the list of item in each order. `order_items[n].sku` is the key to match with the input. The value in `object.doc.order_items[n].qty_ordered` represent the quantity of the items and should be accounted for.

##Requirements

* Can be run under **node.js v4**
* Satisfy the objective described above

## Submission
Please create a *pull request* and submit it to this repository.
