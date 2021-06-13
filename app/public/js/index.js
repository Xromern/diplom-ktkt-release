// import './bootstrap.min.js';
import 'jquery';
import 'popper.js';

window.jQuery = $;
window.$ = $;
import {Preloader} from "./preloader";
import {setDefaultImage} from "./coffe";

window.Preloader = Preloader;
window.setDefaultImage = setDefaultImage;
import {paginateArticle} from "./paginate.js";
window.paginateArticle = paginateArticle;



import './ajax_move.js';
import './menu.js';
import './slider.js';
import './useful.js';
import {note} from './notification.js';
window.note = note;
import '../css/admin.scss';
import '../css/big-buttons.scss';
import '../css/login.scss';
import '../css/main.scss';
import '../css/main-journal.scss';
import '../css/media-query.scss';
import '../css/menu.scss';
import '../css/notification.scss';
import '../css/pagination.scss';
import '../css/slider.scss';
import '../css/util.scss';
$( document ).ready(function() {

    setDefaultImage()
});
