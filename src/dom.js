window.dom = {
	create:function(string) {
		
		const container = document.createElement("template");
		container.innerHTML = string.trim();
	
		return container.content.firstChild;
	},
	after(node, newNode) {
		return node.parentNode.insertBefore(newNode, node.nextSibling);
	},
	before(node, newNode) {
		return node.parentNode.insertBefore(newNode, node);
	},
	append(parent, newNode) {
		return parent.appendChild(newNode);
	},
	wrap(node, newParent) {
		dom.before(node, newParent);
		dom.append(newParent, node);
	},
	remove(node) {
		
		node.parentNode.removeChild(node);
		return node;
	},
	empty(parent) {
		let { children } = parent;
		let array = [];
		
		for (let i = 0; i < children.length; i = 0) {
			array.push(children[i]);
			dom.remove(children[i]);
			
		}
		return array; 
	},
	attr(node, name, value) {
		if (arguments.length === 3) {
			node.setAttribute(name, value);
		} else if (arguments.length === 2) {
			return node.getAttribute(name);
		}
	},
	text(node, string) {
		if (arguments.length === 2) {
			node.innerText = string;
		} else if (arguments.length === 1) {
			return node.innerText;
		}
	},
	html(node, string) {
		if (arguments.length === 2) {
			node.innerHTML = string;
		} else if (arguments.length === 1) {
			return node.innerHTML;
		}
	},
	class:{
		add(node, name) {
			node.classList.add(name);
		},
		remove(node, name) {
			node.classList.remove(name);
		},
		contains(node, name) {
			return node.classList.contains(name);
		}
	},
	on(node, name, fn) {
		node.addEventListener(name, fn);
	},
	off(node, name, fn) {
		node.removeEventListener(name, fn);
	},
	find(selector, scope) {
		return (scope || document).querySelectorAll(selector);
	},
	style(node, name, value) {

		if (arguments.length === 3) {
			node.style[name] = value;
		} else if (arguments.length === 2) {
			if (name instanceof Object) {
			
				for (let key in name) {
				
					node.style[key] = name[key]; 
				}
			} else if (typeof name === "string") {
				return node.style[name];
			}
		}
	},
	each(nodeList, fn) {
		for (let i = 0; i < nodeList.length; i++) {
			fn.call(null, nodeList[i]);
		}
	},
	parent(node) {
		return node.parentNode;
	},
	children(node) {
		return node.children;
	},
	siblings(node) {

		return Array.from(node.parentNode.children).filter(n => n !== node);
	},
	next(node) {
		return node.nextElementSibling;
	},
	previous(node) {
		return node.previousElementSibling;
	},
	index(node) {
		let parentList = dom.children(node.parentNode);
		let i = 0;
		for (; i < parentList.length; i++) {
			if (parentList[i] === node) {
				break;
			}
		}
		return i;
	}
};