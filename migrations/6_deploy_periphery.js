/* global artifacts */
const Echoer = artifacts.require('Echoer')
const TornadoProxyLight = artifacts.require('TornadoProxyLight')

module.exports = async function (deployer) {
  await deployer.deploy(Echoer)
  await deployer.deploy(TornadoProxyLight)
}
