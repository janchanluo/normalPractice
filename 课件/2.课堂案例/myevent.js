var EventUtil = {
	// 实现监听事件绑定的兼容
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent(on + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },

    // 获取事件对象
    getEvent: function (event) {
        return event ? event : window.event;

    },

	// 获取目标元素
    getTarget: function (event) {
        return event.target || event.srcElement;
    },

	// 阻止默认事件
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

	// 阻止冒泡
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
	
	// 解绑事件的兼容
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent(on + type, handler);
        } else {
            element['on' + type] = null
        }
    }
   
};