export const getToken = async () => {
  var myHeaders = new Headers();
  myHeaders.append('content-type', 'application/x-www-form-urlencoded');

  var urlencoded = new URLSearchParams();
  urlencoded.append('grant_type', 'client_credentials');
  urlencoded.append('client_id', 'VGj2CTuH2CZ2pmOq3QpJ2pnK6ME1CHIL');
  urlencoded.append(
    'client_secret',
    'LRvQNSsrxO44Cs7vrBdmCaJXBrlLPbd0EVAi6J7BwsquML0nXPcGzRaTZZr0t9PD',
  );
  urlencoded.append('audience', 'carto-cloud-native-api');

  return await fetch('https://auth.carto.com/oauth/token', {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    mode: 'no-cors',
    redirect: 'follow',
  });
};
