// 5. Разработайте функцию преобразования JSON в связный список. 
// На входе функция должна получать JSON, содержащий список объектов,
// на выходе объект, представляющий из себя односвязный список.

class LinkedListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
    append(value) {
      // Создаём новый узел.
      const newNode = new LinkedListNode(value);
    
      // Если нет head или tail, делаем новым узлом head и tail.
      if (!this.head || !this.tail) {
        this.head = newNode;
        this.tail = newNode;
    
        return this;
      }
    
      // Присоединяем новый узел к концу связного списка.
      // Берём последний узел и указываем, что его next будет новым узлом.
      this.tail.next = newNode;
    
      // Переназначаем tail на новый узел.
      this.tail = newNode;
    
      return this;
    }
    
    toString( nodeStringifier = value => `${value.key}:${value.value}`) {
      return nodeStringifier ? nodeStringifier(this.value) : `${this.value}`;
    }
  }
  
  let inputJSON = JSON.stringify([
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ])
  
function listFromJSON(inputJSON) {
    let data = JSON.parse(inputJSON);
    let list = new LinkedListNode();
  
    data.map((el, i) => {
      list.append(el)
      console.log(list);
      return list
    })
}
