import { LitElement, html } from '@lion/core';

import '@lion/form/lion-form.js';
import '@lion/radio/lion-radio.js';
import '@lion/radio-group/lion-radio-group.js';

class MyApp extends LitElement {
  render() {
    return html`
    <lion-form>
        <form>
          <lion-radio-group name="dinosGroup" label="What are your favourite dinosaurs?">
            <lion-radio name="dinos[]" label="allosaurus" .choiceValue=${'allosaurus'}></lion-radio>
            <lion-radio name="dinos[]" label="brontosaurus" .choiceValue=${'brontosaurus'}></lion-radio>
            <lion-radio name="dinos[]" label="diplodocus" .choiceValue=${'diplodocus'}></lion-radio>
          </lion-radio-group>
        </form>
    </lion-form>
    `;
  }
}

customElements.define('my-app', MyApp);
