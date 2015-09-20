! function() {

    var SweetSelector = {};
    this.SweetSelector = SweetSelector;

    SweetSelector.select = function(selector) {
        if (selector.match(/^#\w+/)) {
            var primedSelector = selector.replace(/#/, "")
            return document.getElementById(primedSelector)

        } else if (selector.match(/^\.\w+/)) {
            var primedSelector = selector.replace(/\./, "")
            return document.getElementsByClassName(primedSelector)

        } else {
            return document.getElementsByTagName(selector)
        }
    };

}();


! function() {

    var DOM = {}
    this.DOM = DOM;

    DOM.hide = function(selector) {
        var selection = SweetSelector.select(selector)
        this.modifyElementsDisplay(selection, 'none')
    }

    DOM.show = function(selector) {
        var selection = SweetSelector.select(selector)
        this.modifyElementsDisplay(selection, '')
    }

    DOM.addClass = function(selector, klass) {
        var selection = SweetSelector.select(selector)
        for (i = 0; i < selection.length; i++) {
            if (selection[i].className === "") {
                selection[i].className = klass
            } else {
                selection[i].className = (selection[i].className + ' ' + klass)
            }
        }
    }

    DOM.removeClass = function(selector, klass) {
        var selection = SweetSelector.select(selector)
        for (i = 0; i < selection.length; i++) {
            selection[i].className = selection[i].className.replace(klass, "")
        }
    }

    DOM.modifyElementsDisplay = function(elements, mod) {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.display = mod
        }
    }


}();