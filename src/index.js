module.exports = function toReadable (number) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
     var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
              'ninety'];
    let num = number.toString();

    if (num == 0) {
        return 'zero'
    }
    if (num < 20) {
        return ones[number]
    }
    if (num.length == 2) {
        return (tens[num[0]] + ' ' + ones[num[1]]).trim()
    }
    if (num.length == 3){
        if (num[1]  == 0) {
            return (ones[num[0]] + ' hundred '+ ones[num[2]]).trim()
        } else {
            if (num[1] == 1) {
                return (ones[num[0]] + ' hundred '+ (ones[num[1]+num[2]]))
            } else {
                return (ones[num[0]] + ' hundred ' + tens[num[1]] + ' ' + ones[num[2]]).trim();
            }
        }
    }
}