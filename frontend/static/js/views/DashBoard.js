import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome back, Travis</h1>
        <p>
            You are viewing the Dashboard page.
        </p>
        <p>
            <a href="/recipes" data-link>View recent recent recipes</a>
        </p>
        `;
    }
}