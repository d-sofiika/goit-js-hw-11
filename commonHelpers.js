import{S as f,i as m}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function d(s,o){const r="https://pixabay.com/api/",a="43384169-ca1a4d081c57b6f9f4fa25679",e=new URLSearchParams({key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return d(`${r}?${e}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function h(s){return s.hits.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:c,comments:u,downloads:p})=>`
    <li class="card">
        <a href="${a}">
            <img src="${r}" alt="${e}" class="img"/>
        </a>
        <div class="information">
            <div class="descr">
                <p class="text">Likes</p>
                <span class="value">${t}</span>
            </div>
            <div class="descr">
                <p class="text">Views</p>
                <span class="value">${c}</span>
            </div>
            <div class="descr">
                <p class="text">Comments</p>
                <span class="value">${u}</span>
            </div>
            <div class="descr">
                <p class="text">Downloads</p>
                <span class="value">${p}</span>
            </div>
        </div>
    </li>
    `).join("")}const i=document.querySelector(".form-search"),l=document.querySelector(".card-container"),n=document.querySelector(".loader");n.style.borderColor="white";n.style.borderBottomColor="transparent";const y=new f(".card .card-container a",{captionsData:"alt",captionDelay:250});i.addEventListener("submit",v);async function v(s){s.preventDefault(),l.innerHTML="",n.style.borderColor="black",n.style.borderBottomColor="transparent";const o=i.elements.text.value.trim();d(o).then(r=>{r.total!==0&&(l.insertAdjacentHTML("beforeend",h(r)),y.refresh(),i.elements.text.value="")}).catch(r=>{m.show({title:"Ops.",titleColor:"white",message:r,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})}).finally(()=>{n.style.borderColor="white",n.style.borderBottomColor="transparent"})}
//# sourceMappingURL=commonHelpers.js.map
