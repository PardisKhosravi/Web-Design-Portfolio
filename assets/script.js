
(function(){
  // Smooth scroll for all same-page navigation links.
  document.querySelectorAll('[data-scroll]').forEach(function(link){
    link.addEventListener('click', function(e){
      var id = link.getAttribute('data-scroll');
      var target = document.getElementById(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        if(history && history.replaceState){ history.replaceState(null,'','#'+id); }
        else { location.hash = id; }
      }
    });
  });

  // If the page is opened with a hash, align it below the sticky nav.
  if(location.hash){
    window.setTimeout(function(){
      var el = document.getElementById(location.hash.slice(1));
      if(el){ el.scrollIntoView({behavior:'auto',block:'start'}); }
    }, 40);
  }
})();