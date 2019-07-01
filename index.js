const Geoip = require('geoip-lite')
const ToCurrency = require('./toCurrency')

const ip = ip=>{
  const geo = Geoip.lookup(ip)
  if (!geo) return
  return Object.assign(geo,ToCurrency[geo.country]) }

module.exports = ip
