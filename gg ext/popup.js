function summarizeArticle() {
    var input = document.getElementById("input").value;
    fetch("https://api.meaningcloud.com/summarization-1.0",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "key=c53c7b8364f1bf297ee8c1d604ba52ba&txt=" + encodeURIComponent(input) + "&sentences=3"
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById("input").value = data.summary;
        document.getElementById("download").style.display = "inline";
        // Agregar un mensaje de éxito
        document.getElementById("message").innerText = "¡Artículo resumido exitosamente!";
      })
      .catch(error => {
        console.log(error);
        // Agregar un mensaje de error
        document.getElementById("message").innerText = "Error al resumir el artículo. Por favor intenta nuevamente.";
      });
  }
  
  function downloadSummary() {
    var summary = document.getElementById("input").value;
    var blob = new Blob([summary], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = "resumen.txt";
    link.click();
  }
  
  document.getElementById("summarize").addEventListener("click", summarizeArticle);
  document.getElementById("download").addEventListener("click", downloadSummary);
  