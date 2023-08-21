// 24. Разработайте страницу, отображающую таблицу с данными.
// Требования:
// - данные должны загружаться при загрузке страницы
// - необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
// - необходимо реализовать клиентскую пагинацию (50 элементов на странице)

async function getFetchData() {
    let url = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

( async function() {
    "use strict";
    let fetchData = await getFetchData();
    
    const listingTable = document.getElementById('listingTable');
    function Pagination() {
      
      const prevButton = document.getElementById('button_prev');
      const nextButton = document.getElementById('button_next');
      const sortNameButton = document.getElementById('sort_by_name');
      const sortLastNameButton = document.getElementById('sort_by_last_name');
      const sortTelButton = document.getElementById('sort_by_tel');
      const sortAddressButton = document.getElementById('sort_by_address');
      const sortCityButton = document.getElementById('sort_by_city');
      const clickPageNumber = document.querySelectorAll('.clickPageNumber');
      
      let current_page = 1;
      let records_per_page = 50;
      
      this.init = function() {
          changePage(1);
          pageNumbers();
          selectedPage();
          clickPage();
          addEventListeners();
     }
      
      let addEventListeners = function() {
          prevButton.addEventListener('click', prevPage);
          nextButton.addEventListener('click', nextPage);   
      }

      let displayListItem = function(listItem) {
        listingTable.innerHTML += "<div class='objectBlock'>"
        + "<span class='fname'>" + `firstname: ${listItem?.fname}` + "</span> " 
        + "<span class='lname'>" + `lastname: ${listItem?.lname}` + "</span> "
        + "<span class='tel'>" + `tel: ${listItem?.tel}` + "</span> "
        + "<span class='address'>" + `address: ${listItem?.address} ` + "</span> "
        + "<span class='city'>" + `city: ${listItem?.city}` + "</span> "  
        + "</div>";
      }

      let selectedPage = function() {
          let page_number = document.getElementById('page_number').getElementsByClassName('clickPageNumber'); 
          for (let i = 0; i < page_number.length; i++) {
              if (i == current_page - 1) {
                  page_number[i].style.opacity = "1.0";
              } 
              else {
                  page_number[i].style.opacity = "0.5";
              }
          }   
      }  
      
      let checkButtonOpacity = function() {
        current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
        current_page == numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
      }

      let changePage = function(page) {

          if (page < 1) {
              page = 1;
          } 
          if (page > (numPages() -1)) {
              page = numPages();
          }
       
          listingTable.innerHTML = "";

          let displayList = function(list) {
              for(var i = (page -1) * records_per_page; i < (page * records_per_page) && i < list.length; i++) {
                displayListItem(list[i]);
              }
          }

          let sortByName = function() {
            if (fetchData) {
                const fetchDataClone = [...fetchData];
                fetchDataClone.sort((a, b) => a.fname > b.fname ? 1 : -1);
                listingTable.innerHTML = "";
                displayList(fetchDataClone);
            }
          }

          let sortByName2 = function() {
            if (fetchData) {
                const fetchDataClone = [...fetchData];
                fetchDataClone.sort((a, b) => b.fname > a.fname ? 1 : -1);
                listingTable.innerHTML = "";
                displayList(fetchDataClone);
            }
          }

          let sortByLastname = function () {
            if (fetchData) {
                const fetchDataClone = [...fetchData];
                fetchDataClone.sort((a, b) => a.lname > b.lname ? 1 : -1);
                listingTable.innerHTML = "";
                displayList(fetchDataClone);
            }
          }

          let sortByLastname2 = function () {
            if (fetchData) {
                const fetchDataClone = [...fetchData];
                fetchDataClone.sort((a, b) => b.lname > a.lname ? 1 : -1);
                listingTable.innerHTML = "";
                displayList(fetchDataClone);
            }
          }

          let sortByTel = function () {
            if (fetchData) {
                const fetchDataClone = [...fetchData];
                fetchDataClone.sort((a, b) => a.tel > b.tel ? 1 : -1);
                listingTable.innerHTML = "";
                displayList(fetchDataClone);
            }
          }

          let sortByTel2 = function () {
            if (fetchData) {
                const fetchDataClone = [...fetchData];
                fetchDataClone.sort((a, b) => b.tel > a.tel ? 1 : -1);
                listingTable.innerHTML = "";
                displayList(fetchDataClone);
            }
          }

          let sortByAddress = function () {
            if (fetchData) {
                const fetchDataClone = [...fetchData];
                fetchDataClone.sort((a, b) => a.address > b.address ? 1 : -1);
                listingTable.innerHTML = "";
                displayList(fetchDataClone);
            }
          }

          let sortByAddress2 = function () {
            if (fetchData) {
                const fetchDataClone = [...fetchData];
                fetchDataClone.sort((a, b) => b.address > a.address ? 1 : -1);
                listingTable.innerHTML = "";
                displayList(fetchDataClone);
            }
          }

          let sortByCity = function () {
            if (fetchData) {
                const fetchDataClone = [...fetchData];
                fetchDataClone.sort((a, b) => a.city > b.city ? 1 : -1);
                listingTable.innerHTML = "";
                displayList(fetchDataClone);
            }
          }

          let sortByCity2 = function () {
            if (fetchData) {
                const fetchDataClone = [...fetchData];
                fetchDataClone.sort((a, b) => b.city > a.city ? 1 : -1);
                listingTable.innerHTML = "";
                displayList(fetchDataClone);
            }
          }
          checkButtonOpacity();
          selectedPage();
          displayList(fetchData);

          sortNameButton.addEventListener('click', sortByName);
          sortNameButton.addEventListener('dblclick', sortByName2);
          sortLastNameButton.addEventListener('click', sortByLastname);
          sortLastNameButton.addEventListener('dblclick', sortByLastname2);
          sortTelButton.addEventListener('click', sortByTel);
          sortTelButton.addEventListener('dblclick', sortByTel2);
          sortAddressButton.addEventListener('click', sortByAddress);
          sortAddressButton.addEventListener('dblclick', sortByAddress2);
          sortCityButton.addEventListener('click', sortByCity);
          sortCityButton.addEventListener('dblclick', sortByCity2);
      }

      let prevPage = function() {
          if(current_page > 1) {
              current_page--;
              changePage(current_page);
          }
      }

      let nextPage = function() {
          if(current_page < numPages()) {
              current_page++;
              changePage(current_page);
          } 
      }

      let clickPage = function() {
          document.addEventListener('click', function(e) {
              if(e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")) {
                  current_page = e.target.textContent;
                  changePage(current_page);
              }
          });
      }

      let pageNumbers = function() {
          let pageNumber = document.getElementById('page_number');
            pageNumber.innerHTML = "";

          for(let i = 1; i < numPages() + 1; i++) {
            pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
          }
      }

      let numPages = function() {
        return Math.ceil(fetchData.length / records_per_page);  
      }
   }
  let pagination = new Pagination();
  pagination.init();
})();
