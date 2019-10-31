
function transformHeaders(html){
    let htmlNodesCounters = {
        h3: 0,
        h4: 0,
        h5: 0,
        h6: 0
    };
    let transform = node => {
        if (node.name == 'h3') {
            htmlNodesCounters.h3++;
            node.attribs.id = 'header-' + htmlNodesCounters.h3;
            this.scrollspyData.push(node.attribs.id);
            this.scrollspyNames.set(node.attribs.id, node.children[0].data);
        }
    }
};
