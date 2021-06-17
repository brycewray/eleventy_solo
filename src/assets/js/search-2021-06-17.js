const searchForm = document.forms['searchForm'];

window.addEventListener('load', () => {
  searchForm.q.value = '';
});

searchForm.addEventListener('submit', function(e){
  e.preventDefault();
  searchForm.q.value += ' site:www.brycewray.com';
  e.currentTarget.submit();
});