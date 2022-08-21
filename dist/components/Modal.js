"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _md = require("react-icons/md");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Modal = _ref => {
  let {
    showModal,
    setShowModal,
    content
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showModal ? /*#__PURE__*/_react.default.createElement(Background, null, /*#__PURE__*/_react.default.createElement(ModalWrapper, {
    showModal: showModal
  }, /*#__PURE__*/_react.default.createElement(ModalContent, null, /*#__PURE__*/_react.default.createElement(_md.MdCheckCircleOutline, null), /*#__PURE__*/_react.default.createElement("p", null, content)), /*#__PURE__*/_react.default.createElement(CloseModalButton, {
    "aria-label": "Close modal",
    onClick: () => setShowModal(prev => !prev)
  }))) : null);
};

const Background = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: rgba(27, 63, 23, 0.7);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n"])));

const ModalWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 50%;\n  height: 35%;\n  max-width: 500px;\n  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.6);\n  background-color: #fff;\n  color: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 20;\n  border-radius: 10px;\n"])));

const ModalContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.8;\n  color: #141414;\n  padding: 10px;\n\n  svg {\n    color: green;\n    font-size: 4rem;\n  }\n\n  p {\n    border-top: 1px solid;\n    margin-bottom: 1rem;\n    font-size: 2.5rem;\n    text-align: center;\n    font-weight: bold;\n    padding-top: 10px;\n\n    @media (max-width: 780px) {\n      font-size: 2rem;\n    }\n  }\n"])));

const CloseModalButton = (0, _styledComponents.default)(_md.MdClose)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  z-index: 30;\n\n  :hover {\n    color: red;\n  }\n"])));
var _default = Modal;
exports.default = _default;