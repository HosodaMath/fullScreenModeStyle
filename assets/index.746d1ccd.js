const l=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};l();window.addEventListener("load",()=>{let r,n;const s=()=>{r=window.innerWidth,n=window.innerHeight;const e=()=>{r=window.innerWidth,n=window.innerHeight,console.log(r,n)};window.addEventListener("resize",e,!0);const t=o=>{(o.key==="f"||o.key==="F")&&document.body.requestFullscreen()};window.addEventListener("keydown",t,!0)},i=()=>{console.log("Hello World")};s(),i()});
