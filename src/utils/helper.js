const helpers = {
    formatMoney: amount => {
        return 'Rs. ' + Number(amount).toLocaleString()
        if(amount<100)
            return "Rs." + amount;
        console.log(amount)
        return "Rs." + amount.replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
    }
}

export default helpers