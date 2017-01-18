module.exports = {
  /**
  * Returns a subdomain from a hostname
  * @param {string} hostname
  * @return {string}
  */
  getSubdomain: function(hostname, base) {

    if (hostname.split('.').length <= 2) {
      return base || 'www'
    }
    return hostname.split('.')[0]
  }
}
