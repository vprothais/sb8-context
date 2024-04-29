import {html} from "lit";

export default {
    title : "context-testing"
}

export const Primary = {
    render: (args, context) => {
        return html`Primary`;
    }
}

export const Secondary = {
    render: (args, context) => {
        return html`Secondary`;
    }
}
