import '@fortawesome/fontawesome-free/css/all.css';

import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

Vue.component('fa', FontAwesomeIcon);

const MY_ICONS = {
    complete: '',
    cancel: 'fas fa-ban',
    close: '',
    delete: '', // delete (e.g. v-chip close)
    clear: 'fas fa-times',
    success: '',
    info: '',
    warning: '',
    error: '',
    prev: '',
    next: '',
    checkboxOn: '',
    checkboxOff: '',
    checkboxIndeterminate: '',
    delimiter: '', // for carousel
    sort: '',
    expand: '',
    menu: 'fas fa-bars',
    subgroup: '',
    dropdown: '',
    radioOn: '',
    radioOff: '',
    edit: '',
};

export const icons = {
    iconfont: 'fa',
    icons: MY_ICONS,
};
