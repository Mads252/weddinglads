   // Hent alle elementer med den samme klasse
   var personContainers = document.querySelectorAll('.person_container_under');

   // Opret en variabel for at spore, om der allerede er sket en ændring
   var colorChanged = false;

   // Tilføj en eventlistener til hvert element
   personContainers.forEach(function(element) {
       element.addEventListener('click', function() {
           // Ændr farven på baggrundsfarven og kantfarven
           if (this.classList.contains('selected')) {
               this.style.backgroundColor = '#DEFFCF'; // Original baggrundsfarve
               this.style.border = '2px solid #368C0D'; // Original kantfarve
               this.classList.remove('selected');
           } else {
               this.style.backgroundColor = '#8C0D0D'; // Ny baggrundsfarve
               this.style.border = '2px solid #FFCFCF'; // Ny kantfarve
               this.classList.add('selected');
           }
       });
   });



   