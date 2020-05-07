// app/javascript/controllers/topappbar_controller.js
import { Controller } from "stimulus"
import { MDCTopAppBar } from "@material/top-app-bar";

export default class extends Controller {
    static get targets() {
        return []
    }
    initialize() {

    }
    connect() {
        console.log('topAppBar working');
        
        const topAppBar = new MDCTopAppBar(this.element);
        topAppBar.listen('MDCTopAppBar:nav', () => {
            window.dispatchEvent(new CustomEvent("clickedAtMenu"));
        });
    }
    disconnect() { }
    toggle() {

    }
    redirect(event) {
    }
}