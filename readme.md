Kip
----

Get informations from ip address like geolocation, currency, language, timezone, and more

```js
const IpInfo = require('kip')

const ip = '5.51.43.146'
const info = IpInfo(ip)

console.log(info)
{ range: [ 87238656, 87239679 ],
  country: 'FR',
  region: 'OCC',
  eu: '1',
  timezone: 'Europe/Paris',
  city: 'Toulouse',
  ll: [ 43.6046, 1.4451 ],
  metro: 0,
  area: 20,
  country_name: 'France',
  currency: 'Euros',
  currencyCode: 'EUR',
  symbol: '€',
  symbol_native: '€' }
```
