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
import '../css/admin.css';
import '../css/big-buttons.css';
import '../css/login.css';
import '../css/main.css';
import '../css/main-journal.css';
import '../css/media-query.css';
import '../css/menu.css';
import '../css/notification.css';
import '../css/pagination.css';
import '../css/slider.css';
import '../css/util.css';
$( document ).ready(function() {

    setDefaultImage()
});
