class BasePage {
    // get createContract () {
    //     return $('p=Create A Contract');
    // }

    clickCreateContract (heading1) {
        const headingLocator = 'p='+heading1;
        return  $(headingLocator).click();
    }

   
    verifyContractMenu(heading1){
        const ContractType_H1 = 'p='+heading1;
        return expect($(ContractType_H1)).toHaveText(heading1);
    }

    clickContractType(contractType) {
        const contractTypeLocator = 'h4='+contractType;
        return $(contractTypeLocator).click();
    }
    get contractTypeFixedRate() {
        return $('h2=Creating a fixed contract');
    }
    verifyContractType() {
        return expect(this.contractTypeFixedRate).toHaveTextContaining('fixed contract');
    }
}
module.exports = new BasePage();
