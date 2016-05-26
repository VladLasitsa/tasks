function List() {

	this.head = null;
	this.length = 0;
}

List.prototype.head = function() {
		return this.head;
}

List.prototype.tail = function() {
		var item = this.head;
		while(item.next !== null){
			item = item.next;
		}
		return item;
}

List.prototype.appened = function(data) {
		var item = this.head;
		var node = {
			data: data,
			next: null,
			prev: null
		}
		if(this.length === 0){
			this.head = node;
		}
		else{
			while(item.next !== null){
				item = item.next;
			}
			item.next = node;
			node.prev = item;
			node.next = null;
			
		}
		this.length++;
		return this;
}

List.prototype.at = function(index) {
		var count = 0;
		var item = this.head;
		if(this.length >= index){
			while(count !== index){
				if(item.next !== null){
					item = item.next;
					count++;
				}	
			}
			return item.data;
		}
		return null;
}

List.prototype.findNode = function(index) {
	var count = 0;
		var item = this.head;
		if(this.length >= index){
			while(count !== index){
				if(item.next !== null){
					item = item.next;
					count++;
				}	
			}
			return item;
		}
		return null;
}


List.prototype.insertAt = function(index, data) {
		var nodeIndex = this.findNode(index);
		var prev;
		var node = {
			data: data,
			next: null,
			prev: null
		}
		if(nodeIndex !== null){
			prev = nodeIndex.prev;
			if(prev !== null){
				prev.next = node;
				node.prev = prev;
				node.next = nodeIndex;
				nodeIndex.prev = node;
			}
		}
		else {
			this.appened(data);
		}
		this.length++;
		return this;
}

List.prototype.deleteAt = function(index) {
	var nodeIndex = this.findNode(index);
	var prev;
	var next;
	if(nodeIndex !== null){
			prev = nodeIndex.prev;
			next = nodeIndex.next;
			if(prev !== null){
				prev.next = next;

			}
			if(next !== null){
				next.prev = prev;
			}
			this.length--;
		}

	return this;

}

List.prototype.reverse = function() {
	var item = this.head; 
	var next;
	var prev;
	if(item !== null){
		while(item.next !== null) {
			next = item.next;
			prev = item.prev;
			item.next = prev;
			item.prev = next;
			item = item.prev;
		}
			next = item.next;
			prev = item.prev;
			item.next = prev;
			item.prev = next;
	}

	this.head = item;
	return this;
}

List.prototype.each = function(callBackFunction) {
	var item = this.head;
	var count = 0;
	if(item !== null){
		while(count !== this.length){
			callBackFunction(item);
			item = item.next;
			count++;
		}
	}
	return this;
}

List.prototype.indexOf = function(data) {
	var item = this.head;
	var count = 0;
	if(item.data === data) return count;
	else{
		while(item !== null){
			if(item.data != data){
				count++;
			}
			else return count;
			item = item.next;
		}
	}
	return -1;
}

var list = new List();

list.appened('item1');
list.appened('item2');
list.appened('item3');

list.appened('item4').appened('item5').deleteAt(3);