function cifraCesar(str) {
        var resultado = "";
        for (var i = 0; i < str.length; i++) {
          var codigo = str.charCodeAt(i);
          resultado += String.fromCharCode((codigo + 3))
        }
        return resultado;
      }