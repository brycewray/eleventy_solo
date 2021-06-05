const searchForm = document.forms['searchForm'];

window.addEventListener('load', () => {
  searchForm.query.value = '';
});

searchForm.addEventListener('submit', function(e){
  e.preventDefault();
  searchForm.query.value += ' site:www.brycewray.com';
  e.currentTarget.submit();
});