import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faBars, faChevronDown, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTelegram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

library.add(faLinkedin, faTelegram, faFacebook, faGithub, faBars, faChevronDown, faChevronUp, faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);
