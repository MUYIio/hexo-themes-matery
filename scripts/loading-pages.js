/* global hexo */
"use strict";
hexo.extend.filter.register('after_render:html', function (htmlContent) {
     const injectHead =
 `<style type="text/css" lang="css">
    #loading-container{
        position: fixed;
        top: 0;
        left: 0;
        min-height: 100vh;
        width: 100vw;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #FFF;
        text-align: center;
        /* loaderҳ����ʧ���ý����ķ�ʽ*/
        -webkit-transition: opacity 1s ease;
        -moz-transition: opacity 1s ease;
        -o-transition: opacity 1s ease;
        transition: opacity 1s ease;
    }
    .loading-image{
        width: 120px;
        height: 50px;
        transform: translate(-50%);
    }

    .loading-image div:nth-child(2) {
        -webkit-animation: pacman-balls 1s linear 0s infinite;
        animation: pacman-balls 1s linear 0s infinite
    }

    .loading-image div:nth-child(3) {
        -webkit-animation: pacman-balls 1s linear .33s infinite;
        animation: pacman-balls 1s linear .33s infinite
    }

    .loading-image div:nth-child(4) {
        -webkit-animation: pacman-balls 1s linear .66s infinite;
        animation: pacman-balls 1s linear .66s infinite
    }

    .loading-image div:nth-child(5) {
        -webkit-animation: pacman-balls 1s linear .99s infinite;
        animation: pacman-balls 1s linear .99s infinite
    }

   .loading-image div:first-of-type {
        width: 0;
        height: 0;
        border: 25px solid #49b1f5;
        border-right-color: transparent;
        border-radius: 25px;
        -webkit-animation: rotate_pacman_half_up .5s 0s infinite;
        animation: rotate_pacman_half_up .5s 0s infinite;
    }
    .loading-image div:nth-child(2) {
        width: 0;
        height: 0;
        border: 25px solid #49b1f5;
        border-right-color: transparent;
        border-radius: 25px;
        -webkit-animation: rotate_pacman_half_down .5s 0s infinite;
        animation: rotate_pacman_half_down .5s 0s infinite;
        margin-top: -50px;
    }
    @-webkit-keyframes rotate_pacman_half_up {0% {transform: rotate(270deg)}50% {transform: rotate(1turn)}to {transform: rotate(270deg)}}

    @keyframes rotate_pacman_half_up {0% {transform: rotate(270deg)}50% {transform: rotate(1turn)}to {transform: rotate(270deg)}}

    @-webkit-keyframes rotate_pacman_half_down {0% {transform: rotate(90deg)}50% {transform: rotate(0deg)}to {transform: rotate(90deg)}}

    @keyframes rotate_pacman_half_down {0% {transform: rotate(90deg)}50% {transform: rotate(0deg)}to {transform: rotate(90deg)}}

    @-webkit-keyframes pacman-balls {75% {opacity: .7}to {transform: translate(-100px, -6.25px)}}

    @keyframes pacman-balls {75% {opacity: .7}to {transform: translate(-100px, -6.25px)}}


    .loading-image div:nth-child(3),
    .loading-image div:nth-child(4),
    .loading-image div:nth-child(5),
    .loading-image div:nth-child(6){
        background-color: #49b1f5;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        width: 10px;
        height: 10px;
        position: absolute;
        transform: translateY(-6.25px);
        top: 25px;
        left: 100px;
    }
    .loading-text{
        margin-bottom: 20vh;
        text-align: center;
        color: #2c3e50;
        font-size: 2rem;
        box-sizing: border-box;
        padding: 0 10px;
        text-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    @media only screen and (max-width: 500px) {
         .loading-text{
            font-size: 1.5rem;
         }
    }
    .fadeout {
        opacity: 0;
        filter: alpha(opacity=0);
    }
    /* logo���ֶ��� */
    @-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{opacity:1;-webkit-transform:none;transform:none}}
    @keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);}}
 </style>
 <script>
(function () {
    const loaded = function(){
       setTimeout(function(){
            const loader = document.getElementById("loading-container");
            loader.className="fadeout" ;//ʹ�ý����ķ�������loading page
            // document.getElementById("body-wrap").style.display="flex";
            setTimeout(function(){
                loader.style.display="none";
            },1000); 
        },1000);//ǿ����ʾloading page 1s  
    };
    loaded();
})()
 </script>`;
     const injectBody = `
 <div id="loading-container">
     <p class="loading-text"></p> 
     <div class="loading-image">
         <div></div>
         <div></div>
         <div></div>
         <div></div> 
         <div></div>
     </div>
 </div>`;
     if (/<\/head>/gi.test(htmlContent)) {
         let lastIndex = htmlContent.lastIndexOf('</head>');
         htmlContent = htmlContent.substring(0, lastIndex) + injectHead + htmlContent.substring(lastIndex, htmlContent.length);
     }
     if (/<body>/gi.test(htmlContent)) {
         let index = htmlContent.indexOf('<body>');
         htmlContent = htmlContent.substring(0, index) + injectBody + htmlContent.substring(index, htmlContent.length);
     }
     return htmlContent;
 }, 1);