(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{F8TQ:function(e,t){new(function(){function e(){this.themeTypes={LIGHT:"light-theme",DARK:"dark-theme"},this.defaultSettings={theme:this.themeTypes.LIGHT},this.refs={themeSwitchCtrl:document.querySelector("input.js-switch-input"),themeCntr:document.querySelector("body")},this.init(),this.handle()}var t=e.prototype;return t.init=function(){this.setDefaultSettings(),this.setTheme()},t.handle=function(){var e=this;this.refs.themeSwitchCtrl.addEventListener("change",(function(t){return e.changeTheme(t)}))},t.setDefaultSettings=function(){localStorage.getItem("settings")||localStorage.setItem("settings",JSON.stringify(this.defaultSettings))},t.setTheme=function(){var e=JSON.parse(localStorage.getItem("settings"));e.theme===this.themeTypes.LIGHT&&(this.refs.themeCntr.classList.add(this.themeTypes.LIGHT),this.refs.themeSwitchCtrl.checked=!1),e.theme===this.themeTypes.DARK&&(this.refs.themeCntr.classList.add(this.themeTypes.DARK),this.refs.themeSwitchCtrl.checked=!0)},t.changeTheme=function(e){var t=JSON.parse(localStorage.getItem("settings"));e.target.checked?(this.refs.themeCntr.classList.contains(this.themeTypes.LIGHT)&&this.refs.themeCntr.classList.remove(this.themeTypes.LIGHT),this.refs.themeCntr.classList.add(this.themeTypes.DARK),t.theme=this.themeTypes.DARK):(this.refs.themeCntr.classList.contains(this.themeTypes.DARK)&&this.refs.themeCntr.classList.remove(this.themeTypes.DARK),this.refs.themeCntr.classList.add(this.themeTypes.LIGHT),t.theme=this.themeTypes.LIGHT),localStorage.setItem("settings",JSON.stringify(t))},e}())},L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("8cZI"),n("lmye");var s=n("dxDv"),i=n("fR8h"),a=n.n(i);new(function(){function e(e,t){this.items=e,this.template=t,this.markup=this.generateMenuMarkup(this.items,this.template),this.refs={list:document.querySelector(".js-menu")},this.init()}var t=e.prototype;return t.init=function(){this.refs.list.insertAdjacentHTML("beforeend",this.markup)},t.generateMenuMarkup=function(e,t){return e.map((function(e){return t(e)})).join("")},e}())(s,a.a);n("F8TQ")},dxDv:function(e){e.exports=JSON.parse('[{"id":"XWaQXcbk0","name":"Картофель, запеченный в мундире","description":"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.","image":"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg","price":100,"ingredients":["Картофель","Чеснок","Сметана","Бекон","Твердый сыр","Зеленый лук"]},{"id":"pkXzyRp1P","name":"Томатный магрибский суп","description":"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.","image":"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg","price":150,"ingredients":["Помидоры","Куриный бульон","Мед","Петрушка","Кинза","Паприка"]},{"id":"QMom9q4Ku","name":"Крем-суп из тыквы","description":"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.","image":"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png","price":100,"ingredients":["Тыква","Петрушка","Сливки","Бренди","Куриный бульон"]},{"id":"k2k0UrjZG","name":"Салат из красной фасоли с творожным сыром","description":"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.","image":"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg","price":150,"ingredients":["Фасоль","Соль","Чеснок","Оливковое масло","Творожный сыр","Красный лук"]},{"id":"j2k8U1jZd","name":"Классический греческий салат ","description":"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.","image":"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg","price":350,"ingredients":["Оливковое масло","Лимонный сок","Чеснок","Помидоры","Красный лук","Сыр фета","Маслины"]},{"id":"X2aQ7cvkd","name":"Маффины с голубикой и мускатным орехом","description":"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.","image":"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg","price":170,"ingredients":["Сливочное масло","Пшеничная мука","Голубика","Ванильный экстракт","Мускатный орех"]},{"id":"nk3zy1pf8","name":"Азу по‑татарски","description":"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.","image":"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg","price":270,"ingredients":["Говядина","Соленые огурцы","Картофель","Мясной бульон","Чеснок"]},{"id":"b7k2U13fd","name":"Жареный рис с яйцом по‑китайски","description":"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.","image":"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg","price":240,"ingredients":["Круглый рис","Мини цукини","Тертый имбирь","Грибы шиитаке","Соевый соус","Кунжутное масло"]}]')},fR8h:function(e,t,n){var s=n("mp5j");e.exports=(s.default||s).template({1:function(e,t,n,s,i){return'        <li class="tag-list__item">'+e.escapeExpression(e.lambda(t,t))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,s,i){e.propertyIsEnumerable;var a,r,c=null!=t?t:e.nullContext||{},h=e.hooks.helperMissing,o="function",p=e.escapeExpression;return'<li class="menu__item">\r\n  <div class="card">\r\n    <img\r\n      src="'+p(typeof(r=null!=(r=n.image||(null!=t?t.image:t))?r:h)===o?r.call(c,{name:"image",hash:{},data:i}):r)+'"\r\n      alt="'+p(typeof(r=null!=(r=n.name||(null!=t?t.name:t))?r:h)===o?r.call(c,{name:"name",hash:{},data:i}):r)+'"\r\n      class="card__image"\r\n    />\r\n    <div class="card__content">\r\n      <h2 class="card__name">'+p(typeof(r=null!=(r=n.name||(null!=t?t.name:t))?r:h)===o?r.call(c,{name:"name",hash:{},data:i}):r)+'</h2>\r\n      <p class="card__price">\r\n        <i class="material-icons">\r\n          monetization_on\r\n        </i>\r\n        '+p(typeof(r=null!=(r=n.price||(null!=t?t.price:t))?r:h)===o?r.call(c,{name:"price",hash:{},data:i}):r)+' кредитов\r\n      </p>\r\n\r\n      <p class="card__descr">\r\n        '+p(typeof(r=null!=(r=n.description||(null!=t?t.description:t))?r:h)===o?r.call(c,{name:"description",hash:{},data:i}):r)+'\r\n      </p>\r\n\r\n      <ul class="tag-list">\r\n'+(null!=(a=n.each.call(c,null!=t?t.ingredients:t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i}))?a:"")+'      </ul>\r\n    </div>\r\n\r\n    <button class="card__button button">\r\n      <i class="material-icons button__icon">\r\n        shopping_cart\r\n      </i>\r\n      В корзину\r\n    </button>\r\n  </div>\r\n</li>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.b8b50ef19c4141d4dc91.js.map