webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){(0,h["default"])(d["default"],v["default"],"app");var e=document.createElement("div");document.body.appendChild(e),l["default"].render(u["default"].createElement(f["default"],null),e)}n(1),n(2);var a=n(6),u=r(a),i=n(158),l=r(i),c=n(159),f=r(c),s=n(255),d=r(s),p=n(351),v=r(p),y=n(352),h=r(y);o()},2:function(e,t){},159:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var o=e,a=t,u=n;r=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,n=u,r=!0,i=c=void 0}},l=n(160),c=r(l),f=n(6),s=r(f),d=n(171),p=r(d),v=n(254),y=r(v),h=n(294),b=r(h),g=n(176),O=n(296),m=r(O),_=function(e){function t(){o(this,n),i(Object.getPrototypeOf(n.prototype),"constructor",this).apply(this,arguments)}a(t,e),u(t,[{key:"render",value:function(){return s["default"].createElement("div",null,s["default"].createElement("button",{className:"add-lane",onClick:this.addItem},"+"),s["default"].createElement(c["default"],{stores:[b["default"]],inject:{items:function(){return b["default"].getState().lanes||[]}}},s["default"].createElement(p["default"],null)))}},{key:"addItem",value:function(){y["default"].create({name:"New lane"})}}]);var n=t;return t=(0,g.DragDropContext)(m["default"])(t)||t}(s["default"].Component);t["default"]=_,e.exports=t["default"]},171:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var o=e,a=t,u=n;r=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,n=u,r=!0,i=c=void 0}},l=n(6),c=r(l),f=n(172),s=r(f),d=function(e){function t(){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.items;return c["default"].createElement("div",{className:"lanes"},e.map(this.renderLane))}},{key:"renderLane",value:function(e){return c["default"].createElement(s["default"],{className:"lane",key:e.id,lane:e})}}]),t}(c["default"].Component);t["default"]=d,e.exports=t["default"]},172:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var o=e,a=t,u=n;r=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,n=u,r=!0,i=c=void 0}},c=n(160),f=r(c),s=n(6),d=r(s),p=n(173),v=r(p),y=n(268),h=r(y),b=n(269),g=r(b),O=n(254),m=r(O),_=n(174),j=r(_),w=n(176),E=n(253),P=r(E),k={hover:function(e,t){var n=t.getItem(),r=n.id;e.lane.notes.length||m["default"].attachToLane({laneId:e.lane.id,noteId:r})}},N=function(e){function t(e){a(this,n),l(Object.getPrototypeOf(n.prototype),"constructor",this).call(this,e);var t=e.lane.id;this.addNote=this.addNote.bind(this,t),this.deleteNote=this.deleteNote.bind(this,t),this.editName=this.editName.bind(this,t)}u(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.connectDropTarget,n=e.lane,r=o(e,["connectDropTarget","lane"]);return t(d["default"].createElement("div",r,d["default"].createElement("div",{className:"lane-header"},d["default"].createElement(j["default"],{className:"lane-name",value:n.name,onEdit:this.editName}),d["default"].createElement("div",{className:"lane-add-note"},d["default"].createElement("button",{onClick:this.addNote},"+"))),d["default"].createElement(f["default"],{stores:[g["default"]],inject:{items:function(){return g["default"].get(n.notes)}}},d["default"].createElement(v["default"],{onEdit:this.editNote,onDelete:this.deleteNote}))))}},{key:"addNote",value:function(e){h["default"].create({task:"New task"}),m["default"].attachToLane({laneId:e})}},{key:"editNote",value:function(e,t){h["default"].update({id:e,task:t})}},{key:"deleteNote",value:function(e,t){m["default"].detachFromLane({laneId:e,noteId:t}),h["default"]["delete"](t)}},{key:"editName",value:function(e,t){t?m["default"].update({id:e,name:t}):m["default"]["delete"](e)}}]);var n=t;return t=(0,w.DropTarget)(P["default"].NOTE,k,function(e){return{connectDropTarget:e.dropTarget()}})(t)||t}(d["default"].Component);t["default"]=N,e.exports=t["default"]},173:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var o=e,a=t,u=n;r=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,n=u,r=!0,i=c=void 0}},l=n(6),c=r(l),f=n(174),s=r(f),d=n(175),p=r(d),v=n(254),y=r(v),h=function(e){function t(){var e=this;o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this.renderNote=function(t){return c["default"].createElement(p["default"],{className:"note",onMove:y["default"].move,id:t.id,key:t.id},c["default"].createElement(s["default"],{value:t.task,onEdit:e.props.onEdit.bind(null,t.id),onDelete:e.props.onDelete.bind(null,t.id)}))}}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.items;return c["default"].createElement("ul",{className:"notes"},e.map(this.renderNote))}}]),t}(c["default"].Component);t["default"]=h,e.exports=t["default"]},174:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var o=e,a=t,u=n;r=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,n=u,r=!0,i=c=void 0}},c=n(6),f=r(c),s=function(e){function t(e){var n=this;a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.renderEdit=function(){return f["default"].createElement("input",{type:"text",autoFocus:!0,defaultValue:n.props.value,onBlur:n.finishEdit,onKeyPress:n.checkEnter})},this.renderValue=function(){var e=n.props.onDelete;return f["default"].createElement("div",{onClick:n.edit},f["default"].createElement("span",{className:"value"},n.props.value),e?n.renderDelete():null)},this.renderDelete=function(){return f["default"].createElement("button",{className:"delete",onClick:n.props.onDelete},"x")},this.edit=function(){n.setState({editing:!0})},this.checkEnter=function(e){"Enter"===e.key&&n.finishEdit(e)},this.finishEdit=function(e){n.props.onEdit(e.target.value),n.setState({editing:!1})},this.state={editing:!1}}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=(e.value,e.onEdit,o(e,["value","onEdit"])),n=this.state.editing;return f["default"].createElement("div",t,n?this.renderEdit():this.renderValue())}}]),t}(f["default"].Component);t["default"]=s,e.exports=t["default"]},175:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e,t,n){for(var r=!0;r;){var o=e,a=t,u=n;r=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,n=u,r=!0,i=c=void 0}},f=n(6),s=r(f),d=n(176),p=n(253),v=r(p),y={beginDrag:function(e){return{id:e.id}},isDragging:function(e,t){return e.id===t.getItem().id}},h={hover:function(e,t){var n=e.id,r=t.getItem(),o=r.id;o!==n&&e.onMove({sourceId:o,targetId:n})}},b=function(e){function t(){a(this,n),c(Object.getPrototypeOf(n.prototype),"constructor",this).apply(this,arguments)}u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.connectDropTarget,r=e.isDragging,a=(e.onMove,e.id,o(e,["connectDragSource","connectDropTarget","isDragging","onMove","id"]));return t(n(s["default"].createElement("li",i({style:{opacity:r?0:1}},a),a.children)))}}]);var n=t;return t=(0,d.DropTarget)(v["default"].NOTE,h,function(e){return{connectDropTarget:e.dropTarget()}})(t)||t,t=(0,d.DragSource)(v["default"].NOTE,y,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(t)||t}(s["default"].Component);t["default"]=b,e.exports=t["default"]},253:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={NOTE:"note"},e.exports=t["default"]},254:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(255),a=r(o);t["default"]=a["default"].generateActions("create","update","delete","attachToLane","detachFromLane","move"),e.exports=t["default"]},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(256),a=r(o),u=new a["default"];t["default"]=u,e.exports=t["default"]},268:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(255),a=r(o);t["default"]=a["default"].generateActions("create","update","delete"),e.exports=t["default"]},269:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(270),i=r(u),l=n(255),c=r(l),f=n(268),s=r(f),d=function(){function e(){o(this,e),this.bindActions(s["default"]),this.notes=[],this.exportPublicMethods({get:this.get.bind(this)})}return a(e,[{key:"create",value:function(e){var t=this.notes;e.id=i["default"].v4(),this.setState({notes:t.concat(e)})}},{key:"update",value:function(e){var t=e.id,n=e.task,r=this.notes,o=this.findNote(t);0>o||(r[o].task=n,this.setState({notes:r}))}},{key:"delete",value:function(e){var t=this.notes,n=this.findNote(e);0>n||this.setState({notes:t.slice(0,n).concat(t.slice(n+1))})}},{key:"findNote",value:function(e){var t=this.notes,n=t.findIndex(function(t){return t.id===e});return 0>n&&console.warn("Failed to find note",t,e),n}},{key:"get",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];return t.map(function(t){return e.notes[e.findNote(t)]}).filter(function(e){return e})}}]),e}();t["default"]=c["default"].createStore(d,"NoteStore"),e.exports=t["default"]},294:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(270),i=r(u),l=n(255),c=r(l),f=n(254),s=r(f),d=n(295),p=r(d),v=n(269),y=r(v),h=function(){function e(){o(this,e),this.bindActions(s["default"]),this.lanes=[]}return a(e,[{key:"create",value:function(e){var t=this.lanes;e.id=i["default"].v4(),e.notes=e.notes||[],this.setState({lanes:t.concat(e)})}},{key:"update",value:function(e){var t=e.id,n=e.name,r=this.lanes,o=this.findLane(t);0>o||(r[o].name=n,this.setState({lanes:r}))}},{key:"delete",value:function(e){var t=this.lanes,n=this.findLane(e);0>n||this.setState({lanes:t.slice(0,n).concat(t.slice(n+1))})}},{key:"attachToLane",value:function(e){var t=e.laneId,n=e.noteId;n||(this.waitFor(y["default"]),n=y["default"].getState().notes.slice(-1)[0].id);var r=this.lanes,o=this.findLane(t);if(!(0>o)){this.removeNote(n);var a=r[o];-1===a.notes.indexOf(n)?(a.notes.push(n),this.setState({lanes:r})):console.warn("Already attached note to lane",r)}}},{key:"removeNote",value:function(e){var t=this.lanes,n=t.filter(function(t){return t.notes.indexOf(e)>=0})[0];if(n){var r=n.notes.indexOf(e);n.notes=n.notes.slice(0,r).concat(n.notes.slice(r+1))}}},{key:"detachFromLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes,o=this.findLane(t);if(!(0>o)){var a=r[o],u=a.notes,i=u.indexOf(n);-1!==i?(a.notes=u.slice(0,i).concat(u.slice(i+1)),this.setState({lanes:r})):console.warn("Failed to remove note from a lane as it didn't exist",r)}}},{key:"findLane",value:function(e){var t=this.lanes,n=t.findIndex(function(t){return t.id===e});return 0>n&&console.warn("Failed to find lane",t,e),n}},{key:"move",value:function(e){var t=e.sourceId,n=e.targetId,r=this.lanes,o=r.filter(function(e){return e.notes.indexOf(t)>=0})[0],a=r.filter(function(e){return e.notes.indexOf(n)>=0})[0],u=o.notes.indexOf(t),i=a.notes.indexOf(n);o===a?o.notes=(0,p["default"])(o.notes,{$splice:[[u,1],[i,0,t]]}):(o.notes.splice(u,1),a.notes.splice(i,0,t)),this.setState({lanes:r})}}]),e}();t["default"]=c["default"].createStore(h,"LaneStore"),e.exports=t["default"]},295:function(e,t,n){"use strict";function r(e){return Array.isArray(e)?e.concat():e&&"object"==typeof e?u(new e.constructor,e):e}function o(e,t,n){Array.isArray(e)?void 0:l(!1);var r=t[n];Array.isArray(r)?void 0:l(!1)}function a(e,t){if("object"!=typeof t?l(!1):void 0,c.call(t,p))return 1!==Object.keys(t).length?l(!1):void 0,t[p];var n=r(e);if(c.call(t,v)){var i=t[v];i&&"object"==typeof i?void 0:l(!1),n&&"object"==typeof n?void 0:l(!1),u(n,t[v])}c.call(t,f)&&(o(e,t,f),t[f].forEach(function(e){n.push(e)})),c.call(t,s)&&(o(e,t,s),t[s].forEach(function(e){n.unshift(e)})),c.call(t,d)&&(Array.isArray(e)?void 0:l(!1),Array.isArray(t[d])?void 0:l(!1),t[d].forEach(function(e){Array.isArray(e)?void 0:l(!1),n.splice.apply(n,e)})),c.call(t,y)&&("function"!=typeof t[y]?l(!1):void 0,n=t[y](n));for(var h in t)b.hasOwnProperty(h)&&b[h]||(n[h]=a(e[h],t[h]));return n}var u=n(43),i=n(83),l=n(17),c={}.hasOwnProperty,f=i({$push:null}),s=i({$unshift:null}),d=i({$splice:null}),p=i({$set:null}),v=i({$merge:null}),y=i({$apply:null}),h=[f,s,d,p,v,y],b={};h.forEach(function(e){b[e]=!0}),e.exports=a},351:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},e.exports=t["default"]},352:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(353),a=r(o);t["default"]=function(e,t,n){var r=(0,a["default"])(e);try{e.bootstrap(t.get(n))}catch(o){console.error("Failed to bootstrap data",o)}r.listen(function(){t.get("debug")||t.set(n,e.takeSnapshot())})},e.exports=t["default"]},353:function(e,t){"use strict";function n(){var e=this;this.dispatcher.register(function(t){var n=Object.keys(e.alt.stores).reduce(function(t,n){return t.push(e.alt.stores[n].dispatchToken),t},[]);e.waitFor(n),e.setState({payload:t}),e.emitChange()})}function r(e){return e.FinalStore?e.FinalStore:e.FinalStore=e.createUnsavedStore(n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r,e.exports=t["default"]}});
//# sourceMappingURL=app.2d0c2778e37a8e74bb44.js.map