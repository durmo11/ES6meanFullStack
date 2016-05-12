export default class HomeController {
  constructor(mainService) {
    this.projects= mainService.query();
    console.log(this.projects);
  }

}
HomeController.$inject = ['mainService'];
