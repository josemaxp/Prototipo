(function(window, undefined) {
  var dictionary = {
    "7ad3903c-d854-47ad-bf2d-8c42e5f7e71e": "Crear proyecto",
    "1526fb8f-2f62-4260-b416-325faa77b7a4": "Crear tarea",
    "7eb3542a-819e-4259-beb8-321d0b319365": "acerca de",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Pantalla principal",
    "ed6df902-0f4a-4480-b34b-400c2f1fefaf": "Proyecto",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);