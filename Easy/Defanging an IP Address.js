/*
  Date: 12/16/2019
  Source: https://leetcode.com/problems/defanging-an-ip-address/
*/

/**
 * @param {string} address
 * @return {string}
 */

/* One line solution using RegEx */
const defangIPaddr = address => address.replace(/\./g, '[.]');

/* Actual "fastest" solution is a simple for loop */
var defangIPaddr = function(address) {
    let ip = ''
    for(let i = 0 ; i < address.length;i++){
        if(address[i] === '.'){
            ip+='[.]'
    }
    else{
        ip+=address[i]
    }
};
    return ip
}

