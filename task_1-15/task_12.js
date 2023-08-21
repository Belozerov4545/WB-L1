// 12. Задача на работу с объектами: 
// создайте объект, представляющий собой книгу. 
// Объект должен иметь свойства, такие как: 
// название книги, автор и год издания. 
// Напишите методы для получения и изменения значений свойств книги.

let bookObj = {
    title: 'The Shining',
    author: 'Stephen King',
    yearOfPublishing: 1977,

    // методы для получения свойств
    getTitle() {
      console.log(this.title);
    },
  
    getAuthor() {
      console.log(this.author);
    },
  
    getYear() {
      console.log(this.yearOfPublishing);
    },

    // методы для изменения свойств
    setTitle(title) {
      console.log(this.title = title);
    },
  
    setAuthor(author) {
      console.log(this.author = author);
    },
    
    setYear(year) {
      console.log(this.yearOfPublishing = year);
    },
  };
  