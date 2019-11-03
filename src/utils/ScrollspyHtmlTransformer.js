import {HEADER_LEVEL_START} from "./constants";
import React from "react";
import {convertNodeToElement} from "react-html-parser";

export default class ScrollspyHtmlTransformer {
    headerCounter = 0;
    scrollspyData = {};

    transform = (node, index) => {
        if (ScrollspyHtmlTransformer.isHeaderNode(node)) {
            node.attribs.id = `header-${++this.headerCounter}`;
            const headerRef = React.createRef();
            this.scrollspyData[node.attribs.id] = {
                name: node.children[0].data,
                level: ScrollspyHtmlTransformer.getNodeLevel(node),
                headerRef,
            };
            return {
                ...convertNodeToElement(node),
                ref: headerRef,
            };
        }
    };

    static isHeaderNode(node) {
        return /^h[1-6]$/.test(node.name);
    }

    static getNodeLevel(node) {
        const headerLevelConsideringStartLevel = node.name[1] - HEADER_LEVEL_START;
        return headerLevelConsideringStartLevel > 0 ? headerLevelConsideringStartLevel : 0
    }
}
