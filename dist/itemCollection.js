import "core-js/modules/web.dom.iterable";
import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs2/helpers/esm/createClass";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
export var ItemCollection =
/*#__PURE__*/
function () {
  function ItemCollection() {
    _classCallCheck(this, ItemCollection);

    _defineProperty(this, "storage", []);
  }

  _createClass(ItemCollection, [{
    key: "forEach",
    value: function forEach(delegate) {
      this.storage.forEach(function (item) {
        return delegate(item);
      });
    }
  }]);

  return ItemCollection;
}();