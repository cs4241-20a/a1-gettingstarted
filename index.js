function yeetElements(){
    let body = document.body;
    for(let i=0; i < body.childElementCount; i++){
        throwSingleElement(body.children[i], 'alternate');
    }
}

function throwSingleElement(node, direction){
    let domRect = node.getBoundingClientRect();
    let storedPosition = window.getComputedStyle(node).position
    node.style.position = 'relative';
    node.animate([
        {
            transform: `rotate(0deg) translateX(-10vw)`,
            left:  `${domRect.left}px`
        },
        {
            transform: `rotate(620deg) translateX(29vw)`,
            left:  `${domRect.left + 200}px`
        },
    ], {
        direction: direction,
        duration: 1000,
        fill: 'forwards',
        iterations: 5
    });
    node.style.position = storedPosition;
    for(let i=0; i < node.childElementCount; i++){
        throwSingleElement(node.children[i], direction === 'alternate' ? 'alternate-reverse': 'alternate');
    }
}