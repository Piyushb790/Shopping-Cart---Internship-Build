var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired91d;e.register("lfDHj",(function(a,t){var d,s,l,n,r;d=a.exports,Object.defineProperty(d,"__esModule",{value:!0,configurable:!0}),s=a.exports,l="default",n=()=>m,Object.defineProperty(s,l,{get:n,set:r,enumerable:!0,configurable:!0});var c=e("ayMG0"),i=e("acw62"),o=e("jvvIU"),u=e("8Jfmj"),x=e("9vFc7"),f=(u=e("8Jfmj"),e("hqWCW")),h=(f=e("hqWCW"),e("jHTLJ"));o=e("jvvIU");var m=()=>{const[e,a]=(0,i.useState)(o.ProductsData),[t]=(0,i.useState)(o.ProductsData),[d,s]=(0,i.useState)(""),l=(0,h.useDispatch)();return(0,x.default)()?(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"p-5 bg-black my-20",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("input",{type:"text",className:"p-2 rounded ",placeholder:"search",value:d,onChange:e=>{s(e.target.value)}}),(0,c.jsx)("button",{className:"text-white ml-2 p-2 rounded bg-[#a496d7]",onClick:()=>{const e=(0,u.filterData)(d,t);a(e)},children:"Search"})]}),(0,c.jsx)("div",{className:"flex gap-5 flex-wrap mt-10",children:e.map((e=>(0,c.jsx)("div",{className:" bg-[#a496d7] rounded-lg p-2",children:(0,c.jsxs)("div",{className:"w-72",children:[(0,c.jsx)(u.ProductCard,{...e}),(0,c.jsx)("div",{children:(0,c.jsxs)("button",{className:"py-2 px-1 bg-white mt-4 rounded-md flex items-center font-semibold shadow-md",onClick:()=>(e=>{l((0,f.addItem)(e))})(e),children:["Add to cart",(0,c.jsx)("div",{className:"bg-[#a496d7] rounded-xl mx-1 px-1 ",children:(0,c.jsx)("img",{src:u.BUTTON_IMG})})]})})]})},e.id)))})]})}):(0,c.jsx)("h1",{className:"text-center text-5xl bg-slate-300 p-10 h-screen",children:"You are offline, Check Your Internet Connection 🔘"})}}));
//# sourceMappingURL=Product.840df5d4.js.map
