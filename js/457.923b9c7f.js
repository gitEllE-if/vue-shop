"use strict";(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[457],{4457:function(t,r,a){a.r(r),a.d(r,{default:function(){return b}});var e=function(){var t=this,r=t._self._c;return t.cartLoading?r("main",{staticClass:"content container"},[t._v("Загрузка корзины...")]):t.cartLoadingFailed?r("main",{staticClass:"content container"},[t._v(" Не удалось загрузить корзину ")]):r("main",{staticClass:"content container"},[r("div",{staticClass:"content__top"},[r("ul",{staticClass:"breadcrumbs"},[r("li",{staticClass:"breadcrumbs__item"},[r("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(" Каталог ")])],1),t._m(0)]),r("h1",{staticClass:"content__title"},[t._v("Корзина")]),r("span",{staticClass:"content__info"},[t._v(" Количество товаров: "+t._s(t.productsAmount))])]),r("section",{staticClass:"cart"},[r("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[r("div",{staticClass:"cart__field"},[r("ul",{staticClass:"cart__list"},t._l(t.products,(function(t){return r("CartItem",{key:t.productId,attrs:{item:t}})})),1)]),r("div",{staticClass:"cart__block"},[r("p",{staticClass:"cart__desc"},[t._v(" Мы посчитаем стоимость доставки на следующем этапе ")]),r("p",{staticClass:"cart__price"},[t._v(" Итого: "),r("span",[t._v(t._s(t._f("numberFormat")(t.totalPrice))+" ₽")])]),r("router-link",{directives:[{name:"show",rawName:"v-show",value:t.productsAmount,expression:"productsAmount"}],staticClass:"cart__button button button--primery",attrs:{tag:"button",type:"submit",to:{name:"order"}}},[t._v(" Оформить заказ ")])],1)])])])},s=[function(){var t=this,r=t._self._c;return r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link"},[t._v(" Корзина ")])])}],i=function(){var t=this,r=t._self._c;return r("li",{key:t.item.product.id,staticClass:"cart__item product"},[r("div",{staticClass:"product__pic"},[r("img",{attrs:{src:t.item.product.image,width:"120",height:"120",srcset:t.item.product.image2,alt:t.item.product.title}})]),r("h3",{staticClass:"product__title"},[t._v(" "+t._s(t.item.product.title)+" ")]),r("span",{staticClass:"product__code"},[t._v(" Артикул: "+t._s(t.item.product.id)+" ")]),r("div",{staticClass:"product__counter form__counter"},[r("button",{attrs:{type:"button","aria-label":"Убрать один товар"},on:{click:t.decrementAmount}},[r("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-minus"}})])]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.amount,expression:"amount",modifiers:{number:!0}}],attrs:{name:"count"},domProps:{value:t.amount},on:{input:function(r){r.target.composing||(t.amount=t._n(r.target.value))},blur:function(r){return t.$forceUpdate()}}}),r("button",{attrs:{type:"button","aria-label":"Добавить один товар"},on:{click:t.incrementAmount}},[r("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),r("b",{staticClass:"product__price"},[t._v(" "+t._s(t._f("numberFormat")(t.item.product.price*t.item.amount))+" ₽ ")]),r("button",{staticClass:"product__del button-del",attrs:{type:"button","aria-label":"Удалить товар из корзины"},on:{click:function(r){return r.preventDefault(),t.deleteProductFromCart(t.item.productId)}}},[r("svg",{attrs:{width:"20",height:"20",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-close"}})])])])},n=[],o=a(408),c=a(5363),u={name:"CartItem",props:["item"],filters:{numberFormat:c.Z},computed:{amount:{get(){return this.item.amount},set(t){this.$store.dispatch("updateCartProductAmount",{productId:this.item.productId,amount:t})}}},methods:{...(0,o.nv)(["deleteProductFromCart"]),incrementAmount(){this.amount++},decrementAmount(){this.amount>=2&&this.amount--}}},l=u,m=a(1001),d=(0,m.Z)(l,i,n,!1,null,null,null),_=d.exports,p={name:"CartPage",components:{CartItem:_},filters:{numberFormat:c.Z},computed:{...(0,o.Se)({products:"cartDetailProducts",totalPrice:"cartTotalPrice",productsAmount:"cartProductsAmount"}),...(0,o.rn)(["cartLoading","cartLoadingFailed"])}},C=p,v=(0,m.Z)(C,e,s,!1,null,null,null),b=v.exports}}]);
//# sourceMappingURL=457.923b9c7f.js.map