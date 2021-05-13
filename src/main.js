let div = dom.create("<div></div>");
let span = dom.create("<span></span>");
let p = dom.create("<p></p>");
let a = dom.create("<a></a>");
let div1 = dom.create("<div class=\"div1\"></div>");
let test = document.querySelector("#test");
dom.after(div, span);
dom.before(div, p);
dom.append(div.parentNode, a);
dom.wrap(div, div1);

//let arr = dom.empty(test);
dom.attr(test, "title", "fuck you");
let title = dom.attr(test, "title");
let string = dom.html(test);

//dom.style(test, "background", "yellow");
let testStyle = dom.style(test, "border");

dom.class.add(test, "red");
dom.class.add(test, "blue");
dom.class.remove(test, "red");
let s = dom.class.contains(test, "blue");
let fn = () => {
	console.log("点击事件");
};
dom.on(test, "click", fn);
dom.off(test, "click", fn);
let test2 = dom.find("#test2")[0];
let red = dom.find(".red", test2)[0];
let siblings = dom.siblings(red);
let nextRed = dom.next(red);
let test2Children = dom.children(test2);
console.log(nextRed);
console.log(dom.previous(dom.find("#a1")[0]));

dom.each(dom.children(dom.find("#test")[0]), (n) => { dom.style(n, "background", "yellow"); });
//console.log(p.parentNode);

let index = dom.index(dom.find("#a1")[0]);
console.log(index);