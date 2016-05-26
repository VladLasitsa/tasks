(function(){
window.$ = function (name) {
	var JQueryObject = {};
	var queryNL = document.querySelectorAll(name);
	JQueryObject.listSelectors = Array.prototype.slice.call(this.queryNL);
	return JQueryObject;
}

JQueryObject.prototype.addClass = function ( classNames ) {
	if (classNames instanceof Function) {
		this.each(function (index, element) {
			var classNew = classNames(index, element.classList[0]);
			var className = classNew.split(' ');

			for (var i = 0; i < className.length; i++) {
				element.classList.add(className[i]);
			}
		});
	}
	else {
		var className = classNames.split(' ');
		this.each(function (index, element) {
			for (var i = 0; i < className.length; i++) {
				element.classList.add(className[i]);
			}
		});
	}
}

JQueryObject.prototype.append = function ( node ) {
	if (node instanceof HTMLElement) {
		this.each(function ( index, element ) {
			element.innerHTML += node.outerHTML;
			//element.appendChild(node);
		});
	}
	else {
		this.each(function (index, element) {
			element.innerHTML += node;
		})
	}
}

JQueryObject.prototype.html = function ( html ) {
	if (arguments.length !== 0) {
		this.each(function ( index, element ) {
			element.innerHTML= html;
		})
	}
	else {
		return this.listSelectors[0].innerHTML;
	}
}

JQueryObject.prototype.attr = function ( name, attr) {
	if (arguments.length !== 1) {
		this.each(function ( index, element ) {
			element.setAttribute(name, attr);
		})
	}
	else {
		return this.listSelectors[0].getAttribute(name);
	}
}

JQueryObject.prototype.children = function ( className) {
	if (arguments.length !== 0) {
		return this.listSelectors[0].querySelectorAll( className );
	}
	else {
		return this.listSelectors[0].childNodes;
	}
}

JQueryObject.prototype.css = function ( newStyle ) {
	if (newStyle instanceof Object) {
		this.each(function ( index, element ) {
			for(var j in  newStyle ) {
				elements[i].style[j] = newStyle[j];
			}
		})
	} else {
		return this.listSelectors[0].getAttribute('style');
	}
}

JQueryObject.prototype.each = function ( callFunction ) {
	for (var index = 0; index < this.listSelectors.length; index++) {
		var element = this.listSelectors[index];
		callReturn = callFunction.call(element, index, element);
		if (callReturn === false) return false;
	}
	return this;
}

JQueryObject.prototype.on = function(events, selector, func) {
	if(selector instanceof Function) {
		this.each(function() {
			this.addEventListener(events, selector);
		});
		return this;
	}

	selector.addEventListener(events, func);
	return this;
}
})();

