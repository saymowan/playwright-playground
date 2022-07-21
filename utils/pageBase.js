// https://playwright.dev/docs/pom
class pageBase{
    constructor(page){
        this.page = page;
    }

    async navigate(path){
        await this.page.goto(`https://demo.applitools.com/${path}`)
    }
}
module.exports = pageBase;