const Fs = require('fs')

const countryToCurrency = require('./countryToCurrency.json')

const missed = Object.keys(countryToCurrency)
  .filter(k=>!countryToCurrency[k].symbol)
  .map(k=>countryToCurrency[k].currencyCode)
  .reduce((o,e)=>{
    if(o.indexOf(e)==-1) o.push(e)
    return o },[])

Fs.writeFileSync('./missedCurrency',missed.join('\n'))
