const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length === validLength) {
        return true;
    } else {
        return false;
    }
    }

console.log("check if 00 is valid = ",  isValidLength('00'));
