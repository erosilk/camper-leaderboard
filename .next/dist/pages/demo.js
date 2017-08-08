"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("isomorphic-fetch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Visitor\\Documents\\programacion\\leaderboard\\pages\\demo.js?entry";


var UserCard = function (_React$Component) {
  (0, _inherits3.default)(UserCard, _React$Component);

  function UserCard(props) {
    (0, _classCallCheck3.default)(this, UserCard);

    return (0, _possibleConstructorReturn3.default)(this, (UserCard.__proto__ || (0, _getPrototypeOf2.default)(UserCard)).call(this, props));
  }

  (0, _createClass3.default)(UserCard, [{
    key: "render",
    value: function render() {
      var userData = this.props.data;

      return _react2.default.createElement("div", { className: "container", "data-jsx": 1595558487,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement("div", { className: "user", "data-jsx": 1595558487,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement("img", { src: userData.img, alt: "", "data-jsx": 1595558487,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement("div", {
        "data-jsx": 1595558487,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement("p", {
        "data-jsx": 1595558487,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, userData.username), _react2.default.createElement("p", {
        "data-jsx": 1595558487,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "\uD83C\uDF6A", userData.alltime, " -", userData.recent))), _react2.default.createElement(_style2.default, {
        styleId: 1595558487,
        css: "*[data-jsx=\"1595558487\"]{margin:0;padding:0;font-family:arial}.container[data-jsx=\"1595558487\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vw;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.user[data-jsx=\"1595558487\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:300px;padding:5px;margin:5px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#dcffac;-webkit-transition:0.2s ease all;transition:0.2s ease all;box-shadow:0px 3px 8px 0px rgba(0, 0, 0, 0.32)}.user[data-jsx=\"1595558487\"]:hover{box-shadow:0px 3px 8px 0px rgba(0, 0, 0, 0.52)}.user[data-jsx=\"1595558487\"] img[data-jsx=\"1595558487\"]{max-height:50px;margin-right:40px}.user[data-jsx=\"1595558487\"] div[data-jsx=\"1595558487\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.user[data-jsx=\"1595558487\"] div[data-jsx=\"1595558487\"] p[data-jsx=\"1595558487\"]:first-child{font-weight:bold;margin-bottom:5px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZW1vLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCVyxBQUd3QixBQUNJLEFBQ0EsQUFDa0MsQUFDL0IsQUFDSCxBQUNJLFVBTmlCLE9BSWUsQ0FFQyxHQU5pQixlQUlMLENBRUMsR0FOaUIsUUFHcEIsOEJBRnBCLEFBQ0EsQUFHVSxhQUoyQixBQUNWLGFBQTBCLFlBQXNDLDJDQUcvQyxhQUoyQiwrQ0FDNEQsMEJBQXdDLFdBR3pGLGFBSkUsb0NBQ3FKLGdEQUFhLE1BR3ZKIiwiZmlsZSI6InBhZ2VzXFxkZW1vLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1Zpc2l0b3IvRG9jdW1lbnRzL3Byb2dyYW1hY2lvbi9sZWFkZXJib2FyZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuXHJcbmNsYXNzIFVzZXJDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXt1c2VyRGF0YS5pbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7dXNlckRhdGEudXNlcm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAg8J+Nqnt1c2VyRGF0YS5hbGx0aW1lfSAtXHJcbiAgICAgICAgICAgICAge3VzZXJEYXRhLnJlY2VudH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNmZmFjO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyIGltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXIgZGl2IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlciBkaXYgcDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9mY2N0b3AxMDAuaGVyb2t1YXBwLmNvbS9hcGkvZmNjdXNlcnMvdG9wL3JlY2VudFwiXHJcbiAgICApO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBkYXRhOiBqc29uIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB1c2VyQXJyYXkgPSB0aGlzLnByb3BzLmRhdGE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt1c2VyQXJyYXkubWFwKHVzZXIgPT4gPFVzZXJDYXJkIGtleT17dXNlci51c2VybmFtZX0gZGF0YT17dXNlcn0gLz4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=pages\\demo.js?entry */"
      }));
    }
  }]);

  return UserCard;
}(_react2.default.Component);

var App = function (_React$Component2) {
  (0, _inherits3.default)(App, _React$Component2);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));
  }

  (0, _createClass3.default)(App, [{
    key: "render",
    value: function render() {
      var userArray = this.props.data;
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, userArray.map(function (user) {
        return _react2.default.createElement(UserCard, { key: user.username, data: user, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        });
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var res, json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                return _context.abrupt("return", { data: json });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;