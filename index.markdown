---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: app
---
<div class="mdc-layout-grid mdc-layout-grid--fixed-column-width">
    <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop profile-card-grid">
            <div class="mdc-card profile-card">
                <div class="mdc-card__media mdc-card__media--square profile-card__media"
                    >
                </div>
                <div class="mdc-card-content">
                    <div class="profile-card__primary">
                        <h2 class="profile-card__title mdc-typography mdc-typography--headline6">Andrés Castellanos</h2>
                        <h3 class="profile-card__subtitle mdc-typography mdc-typography--subtitle2"></h3>
                    </div>
                    <div class="profile-card__secondary mdc-typography mdc-typography--body2">Back-end developer at <a
                            href="https://www.relappro.com">Relappro</a>.</div>
                    <div class="profile-card__secondary mdc-typography mdc-typography--body2">Software engineer.</div>
                    <div class="profile-card__secondary mdc-typography mdc-typography--body2">Full time geek.</div>
                </div>
                <div class="mdc-card__actions">
                    <div class="mdc-card__action-icons">
                        <a href="mailto:acastellanosalcocer@gmail.com"
                            class="fas mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded"
                            title="Let's talk, greet me!" data-mdc-ripple-is-unbounded="true"><i
                                class="fas fa-at"></i></a>
                        <a class="fab mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded"
                            title="Follow me on twitter" data-mdc-ripple-is-unbounded="true"><i
                                class="fab fa-twitter"></i></a>
                        <a class="fab mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded"
                            title="Contact me at LinkedIn" data-mdc-ripple-is-unbounded="true"><i
                                class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>

        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-9-desktop">
            <div class="terminal-window primary-bg" onclick="document.getElementById('dummyKeyboard').focus();">
                <div class="terminal-output" id="terminalOutput">
                    <div class="terminal-line">
                        <span class="help-msg">Welcome to Andrés portfolio — Type <span class="code">help</span>
                            for a list of supported commands.</span>
                    </div>
                </div>
                <div class="terminal-line">
                    <span class="success">➜</span> <span class="directory">~</span> <span class="user-input"
                        id="userInput"></span>
                    <input type="text" id="dummyKeyboard" class="dummy-keyboard">
                </div>
            </div>
        </div>
    </div>
</div>