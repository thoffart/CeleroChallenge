'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">celero-case documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b102353d752f2da822c5f04e8ef0fb26"' : 'data-target="#xs-components-links-module-AppModule-b102353d752f2da822c5f04e8ef0fb26"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b102353d752f2da822c5f04e8ef0fb26"' :
                                            'id="xs-components-links-module-AppModule-b102353d752f2da822c5f04e8ef0fb26"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CardHeroesModule.html" data-type="entity-link">CardHeroesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardHeroesModule-e4729eba8961a288db21f031a5a99c46"' : 'data-target="#xs-components-links-module-CardHeroesModule-e4729eba8961a288db21f031a5a99c46"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardHeroesModule-e4729eba8961a288db21f031a5a99c46"' :
                                            'id="xs-components-links-module-CardHeroesModule-e4729eba8961a288db21f031a5a99c46"' }>
                                            <li class="link">
                                                <a href="components/CardHeroesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardHeroesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FinishedGameModule.html" data-type="entity-link">FinishedGameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FinishedGameModule-6fa56b6c74a30127c17995baf836f832"' : 'data-target="#xs-components-links-module-FinishedGameModule-6fa56b6c74a30127c17995baf836f832"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FinishedGameModule-6fa56b6c74a30127c17995baf836f832"' :
                                            'id="xs-components-links-module-FinishedGameModule-6fa56b6c74a30127c17995baf836f832"' }>
                                            <li class="link">
                                                <a href="components/FinishedGameComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FinishedGameComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link">GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GameModule-09c401c253959ce9165b15f570f19e3c"' : 'data-target="#xs-components-links-module-GameModule-09c401c253959ce9165b15f570f19e3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GameModule-09c401c253959ce9165b15f570f19e3c"' :
                                            'id="xs-components-links-module-GameModule-09c401c253959ce9165b15f570f19e3c"' }>
                                            <li class="link">
                                                <a href="components/GameComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GameComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GameModule-09c401c253959ce9165b15f570f19e3c"' : 'data-target="#xs-injectables-links-module-GameModule-09c401c253959ce9165b15f570f19e3c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GameModule-09c401c253959ce9165b15f570f19e3c"' :
                                        'id="xs-injectables-links-module-GameModule-09c401c253959ce9165b15f570f19e3c"' }>
                                        <li class="link">
                                            <a href="injectables/LocalStorageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalStorageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameRoutingModule.html" data-type="entity-link">GameRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpModule.html" data-type="entity-link">HelpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpModule-1803ee30ecfb7dfc0058d343c9be8444"' : 'data-target="#xs-components-links-module-HelpModule-1803ee30ecfb7dfc0058d343c9be8444"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpModule-1803ee30ecfb7dfc0058d343c9be8444"' :
                                            'id="xs-components-links-module-HelpModule-1803ee30ecfb7dfc0058d343c9be8444"' }>
                                            <li class="link">
                                                <a href="components/HelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpRoutingModule.html" data-type="entity-link">HelpRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-af6e238a46a73b345e357954d8c0b2b4"' : 'data-target="#xs-components-links-module-HomeModule-af6e238a46a73b345e357954d8c0b2b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-af6e238a46a73b345e357954d8c0b2b4"' :
                                            'id="xs-components-links-module-HomeModule-af6e238a46a73b345e357954d8c0b2b4"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ScoreboardModule.html" data-type="entity-link">ScoreboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ScoreboardModule-b71ae4b3094405cb2397a9625042a801"' : 'data-target="#xs-components-links-module-ScoreboardModule-b71ae4b3094405cb2397a9625042a801"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ScoreboardModule-b71ae4b3094405cb2397a9625042a801"' :
                                            'id="xs-components-links-module-ScoreboardModule-b71ae4b3094405cb2397a9625042a801"' }>
                                            <li class="link">
                                                <a href="components/ScoreboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScoreboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchBarModule.html" data-type="entity-link">SearchBarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchBarModule-203aca3b5944551fe051069e7fe98ead"' : 'data-target="#xs-components-links-module-SearchBarModule-203aca3b5944551fe051069e7fe98ead"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchBarModule-203aca3b5944551fe051069e7fe98ead"' :
                                            'id="xs-components-links-module-SearchBarModule-203aca3b5944551fe051069e7fe98ead"' }>
                                            <li class="link">
                                                <a href="components/SearchBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SearchBarModule-203aca3b5944551fe051069e7fe98ead"' : 'data-target="#xs-injectables-links-module-SearchBarModule-203aca3b5944551fe051069e7fe98ead"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SearchBarModule-203aca3b5944551fe051069e7fe98ead"' :
                                        'id="xs-injectables-links-module-SearchBarModule-203aca3b5944551fe051069e7fe98ead"' }>
                                        <li class="link">
                                            <a href="injectables/HeroesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HeroesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchHeroesModule.html" data-type="entity-link">SearchHeroesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchHeroesModule-07a8e32405d2c8d3e13a4dab0fc2c451"' : 'data-target="#xs-components-links-module-SearchHeroesModule-07a8e32405d2c8d3e13a4dab0fc2c451"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchHeroesModule-07a8e32405d2c8d3e13a4dab0fc2c451"' :
                                            'id="xs-components-links-module-SearchHeroesModule-07a8e32405d2c8d3e13a4dab0fc2c451"' }>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchHeroesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchHeroesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TicTacToeModule.html" data-type="entity-link">TicTacToeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TicTacToeModule-06f7f9febfd3c5e8ac65724e07beaf87"' : 'data-target="#xs-components-links-module-TicTacToeModule-06f7f9febfd3c5e8ac65724e07beaf87"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TicTacToeModule-06f7f9febfd3c5e8ac65724e07beaf87"' :
                                            'id="xs-components-links-module-TicTacToeModule-06f7f9febfd3c5e8ac65724e07beaf87"' }>
                                            <li class="link">
                                                <a href="components/TicTacToeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TicTacToeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Md5Hasher.html" data-type="entity-link">Md5Hasher</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cell.html" data-type="entity-link">Cell</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Game.html" data-type="entity-link">Game</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Player.html" data-type="entity-link">Player</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});