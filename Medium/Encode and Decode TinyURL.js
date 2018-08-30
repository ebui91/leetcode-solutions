/*
  Date: 08/30/2018
  Source: https://leetcode.com/problems/encode-and-decode-tinyurl/description/
*/

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const maxChars = 6
let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

// I'm going to use two HashMaps to store both encoded and decoded URLs.
let urlMap = new Map()
let codeMap = new Map()

const encode = longUrl => {
  // Handles collisions within our HashMap. Duplicate URLs use the same encoding.
  if (urlMap.has(longUrl)) {
    urlMap.get(urlMap[longUrl])
  }
  // Uses charSet to generate a random encoded string.
  let code = [...Array(maxChars)]
    .map(curr => Math.floor(Math.random() * charSet.length))
    .map(randomIndex => charSet[randomIndex])
    .join("")

  // Map.prototype.set(key, value)
  urlMap.set(longUrl, code)
  codeMap.set(code, longUrl)

  return `http://tinyurl.com/${code}`
}


/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */

const decode = shortUrl => {
  // Using a negative value as the parameter for substr allows you to start counting backwards from the last character in that string.
  let code = shortUrl.substr(-maxChars)
  return codeMap.get(code)
}


/**
 * Your functions will be called as such:
 * decode(encode(url))
 */

decode(encode('https://soundcloud.com/theoriginalbui'))


// Useful links to reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr