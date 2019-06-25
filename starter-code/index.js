class SortedList {
  constructor() {
  this.items = [];
  this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((x, y)=> x- y);
  }
  
  get(pos) {
  return  this.items[pos] 
  
  }
  max() {
    if(this.length == 0)
    throw new Error("EmptySortedList")
    return Math.max(...this.items)
  }
  min() {
    if(this.length == 0)
    throw new Error("EmptySortedList")
    return Math.min(...this.items)
    } 
  
  sum() {
    if(this.length == 0) return this.length;
    else return [...this.items].reduce((a, b)=> a + b );

  }

  average() {
    if(this.length == 0)
    throw new Error("EmptySortedList")
    else return ([...this.items].reduce((a, b)=> a + b ))/this.items.length;  


  }
};

module.exports = SortedList;
