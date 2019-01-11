"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var linked_list_1 = require("../main/linked-list");
var Problems = /** @class */ (function (_super) {
    __extends(Problems, _super);
    function Problems() {
        return _super.call(this) || this;
    }
    Problems.prototype.dltNodeGrterThnX = function (node, data) {
        var prev = null;
        while (node.element > data) {
            node = node.next;
            console.log('NODE  \n', node);
        }
        var temp = node;
        console.log('temp', temp);
        while (temp.next != null || temp.element > data) {
            if (temp.element > data) {
                if (temp.next != null) {
                    prev.next = temp.next;
                    temp = temp.next;
                }
                else {
                    prev.next = null;
                    // console.log('prev and node value\n', prev, node );
                    break;
                }
            }
            else {
                prev = temp;
                temp = temp.next;
            }
        }
        return node;
    };
    return Problems;
}(linked_list_1.LinkedList));
exports.Problems = Problems;
var toDo = new Problems();
toDo.addNode(10);
toDo.addNode(10);
toDo.addNode(8);
toDo.addNode(15);
toDo.displayAllNode();
var x = toDo.dltNodeGrterThnX(toDo.head, 9);
toDo.displayAllNode();
