// https://playwright.dev/docs/pom
class pageBase{
    constructor(page){
        this.page = page;
    }

    async navigate(url){
        await this.page.goto(url);
    }
}

module.exports = pageBase;