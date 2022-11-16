export const getToken = () => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfNzRlM3Fic3QiLCJqdGkiOiIyZTBiNTQzZCJ9.VrQtuTF1uzpm62Eu6_COK5Qbme82RLk56WM3bavp6x0',
  );

  var raw = JSON.stringify({
    grants: [
      {
        connection_name: 'carto_dw',
        source:
          '`carto-demo-data.demo_tables.airports`, `carto-demo-data.demo_tables.retail_stores`, `carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup`',
      },
    ],
    referers: [],
    allowed_apis: ['sql', 'maps', 'imports'],
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  fetch('https://gcp-us-east1.api.carto.com/v3/tokens', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};
