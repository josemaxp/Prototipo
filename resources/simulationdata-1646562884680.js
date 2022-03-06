function initData() {
  jimData.variables["descripcion"] = "Esto es una descripci\u00F3n de prueba";
  jimData.variables["fechaInicio"] = "";
  jimData.variables["fechaCreacion"] = "";
  jimData.variables["Importancia"] = "Alta";
  jimData.variables["Imagen"] = "";
  jimData.variables["fechaFin"] = "";
  jimData.variables["nombre"] = "Proyecto de prueba";
  jimData.datamasters["Tarea"] = [
    {
      "id": 1,
      "datamaster": "Tarea",
      "userdata": {
        "4cfb0172-20a9-4102-877c-10ac13700784": "Tarea 1",
        "10264094-c392-4a5c-8312-1497cef446f5": "Descripción de la tarea 1",
        "88ecdf90-48e5-44c2-847f-f4d2c69067a2": "4",
        "6fd8b8f1-8aea-41e8-99e1-d03bbb06f2e6": "02/03/2022",
        "de84890c-3c92-4e4a-8295-c371cae1b970": "02/09/2022",
        "f5ba5d90-55d5-44c5-ba3f-0e8aacffce6d": "Alta"
      }
    }
  ];
  jimData.datamasters["Tarea"].category = {
    "61f828e4-2a12-4db5-8beb-763a9a5e375c": ["Baja","Media","Alta"]
  };

  jimData.datamasters["Proyecto"] = [
    {
      "id": 1,
      "datamaster": "Proyecto",
      "userdata": {
        "18ebf0d1-4ca3-4048-b2bb-a63064bc106a": "Proyecto de prueba",
        "e658e1f5-c5dd-4f65-bc22-998d0cab95ef": "Esto es una descripción de prueba",
        "7eeb7dfb-02ef-40c2-b296-89a91118a9c6": "./resources/jim/images/common/crossimage.png",
        "3193a178-da7e-4c65-9599-5fa3dc5f1ac2": "Sample text",
        "fdc575eb-648c-4afd-88ce-cc37a22b8061": "01/24/2022",
        "272ebf93-6dfc-4de2-a714-3b01e42b3c70": "01/30/2022",
        "397e66f2-abc2-45b8-8806-663fe5d6aead": "01/24/2022"
      }
    }
  ];

  jimData.isInitialized = true;
}