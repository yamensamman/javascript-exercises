// Instead of a class, this is implemented in a more functional approach, where
// an object is used to represent the graph state, and stateless functions work
// on the graph object. This could be extended to make the functions *pure* but
// in that case each function would need to return a new graph object which
// would cause a lot of copying, though the gain would be immutable objects!

const graphImplementation = require('./index').graphImplementation;

// Remember, (params) => (stuff) is equivalent to function(params) { return stuff }
// Freezing the graph state object to avoid any changes from the outside.
// Note that in non-strict mode (depending on JS engine), change attempts
// silently fail, but in strict mode, change attempts throw TypeError.
const createGraph = (isDirected = false) => Object.freeze({
    implementation: graphImplementation.adjList,
    adjListMap: new Map(),
    isDirected: isDirected
});

const addVertex = (graph, v) => {
    graph.adjListMap.set(v, []);
};

const hasVertex = (graph, v) => {
    return graph.adjListMap.has(v);
};

const getVertices = (graph) => {
    // return Array.from(graph.adjListMap.keys()); OR
    return [...graph.adjListMap.keys()];
};

const addEdge = (graph, v, w) => {
    // Map.prototype.get(key) returns undefied if key not found
    graph.adjListMap.get(v).push(w);
    if (!graph.isDirected) graph.adjListMap.get(w).push(v);
};

const hasEdge = (graph, v, w) => {
    return graph.adjListMap.get(v).includes(w);
};

const printGraph = (graph) => {
    for (let v of graph.adjListMap.keys()) {
        let str = v;
        for (let w of graph.adjListMap.get(v)) {
            str += ' -> ' + w;
        }
        str += ' -> \\0';
        console.log(str);
    }
};

module.exports = { createGraph, addVertex, hasVertex, getVertices, addEdge, hasEdge, printGraph };

let graph = createGraph(false); // Try with true and see the difference
console.log(graph);
console.log(Object.getPrototypeOf(graph));
console.log(graph.implementation);
console.log(getVertices(graph));
addVertex(graph, 'Montreal');
addVertex(graph, 'Toronto');
addVertex(graph, 'Ottawa');
console.log(getVertices(graph));
console.log(hasEdge(graph, 'Montreal', 'Toronto'));
addEdge(graph, 'Montreal', 'Toronto');
console.log(hasEdge(graph, 'Montreal', 'Toronto'));
console.log(hasEdge(graph, 'Toronto', 'Montreal'));
console.log(hasEdge(graph, 'Montreal', 'Ottawa'));
printGraph(graph);