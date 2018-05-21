

Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#interactive')    // Or '#yourElement' (optional)
    },
    decoder : {
      readers : ["ean_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      const book = "http://openlibrary.org/api/books?bibkeys=ISBN:0201558025&jscmd=data&format=json";
      $.ajax({
          url :book,
        dataType: "json"}).done(function(data){
                console.log(data[Object.keys(data)[0]]);
                var booker = data[Object.keys(data)[0]];
                console.log(booker.title);
                $("#my_image").attr("src",booker.cover.large);
        }); 
    
     Quagga.start();
  });

  