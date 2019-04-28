// Instead of a class, this is implemented in a more functional approach, where
// a prototype object that maintains the graph state object in its closure and
// contains functions for manipulating the private closure state object is used
// as the prototype for every graph object. Graphs are created using
// Object.create. That way, each object created doesn't have its own copy of
// the functions. Instead, the object prototype prototype property points to
// the object which has all the functions. This is more or less how a JS class
// works internally. 

const graphImplementation = require('./index').graphImplementation;

// Remember, (params) => (stuff) is equivalent to function(params) { return stuff }
const createGraph = (isDirected = false) => {
    // No need to freeze graph state object since it will be protected by closure.
    let graph = {
        adjMatrixArray: [],
        map: new Map(), // To have a list of all vertices and the index of each one (v0, v1, v2...)
        isDirected: isDirected
    };
    // Here we are creating an object with prototype ajdMatrixProto using
    // Object.create. This has the advantage of not copying the functions in
    // one of the created objects. Instead, Object.assign could be used to 
    // actually copy the functions, which we would be helpful if we were 
    // composing multiple prototypes to build an object (since Object.assign 
    // can take multiple source objects to copy from) but in this case it would
    // be simply wasteful.
    return Object.create(ajdMatrixProto(graph));
};

// Sample adjacency matrix
//   v0 v1 v2
// v0 0  0  1
// v1 0  1  0
// v2 1  0  0
const ajdMatrixProto = (graph) => ({
    implementation: graphImplementation.adjMatrix,

    addVertex: (v) => {
        graph.map.set(v, graph.map.size); // E.g. first vertex will be stored as (v, 0)
    },

    hasVertex: (v) => {
        // return graph.map.has(v); OR
        return !!graph.map.get(v); // !! coerces into a boolean
    },

    getVertices: () => {
        // return Array.from(graph.map.keys()); OR
        return [...graph.map.keys()];
    },

    // Looks a bit different than other methods because others are all anonymous
    // functions, but this one is named since we need to call it recursively.
    addEdge: function addEdge(v, w, recursion = false) {
        const vIndex = graph.map.get(v);
        const wIndex = graph.map.get(w);
        let vArray = graph.adjMatrixArray[vIndex];
        if (!vArray) {
            vArray = [];
            graph.adjMatrixArray[vIndex] = vArray;
        }
        vArray[wIndex] = 1;
        if (!graph.isDirected && !recursion) addEdge(w, v, true);
    },

    hasEdge: (v, w) => {
        let vArray = graph.adjMatrixArray[v];
        if (!vArray) return false;
        return !!vArray[w]; // Whether undefined or 0, both are falsy!
    },

    printGraph: () => {
        for (let i = 0; i < graph.map.size; i++) {
            let str = '';
            for (let j = 0; j < graph.map.size; j++) {
                str += graph.adjMatrixArray[i]
                        ? (graph.adjMatrixArray[i][j] ? graph.adjMatrixArray[i][j] : '0')
                        : '0'
                str += ' '; 
            }
            console.log(str);
        }
    }
});

module.exports = { createGraph };

let graph = createGraph(false); // Try with true and see the difference
console.log(graph);
console.log(Object.getPrototypeOf(graph));
console.log(graph.implementation);
console.log(graph.getVertices());
graph.addVertex('Montreal');
graph.addVertex('Toronto');
graph.addVertex('Ottawa');
console.log(graph.getVertices());
console.log(graph.hasEdge('Montreal', 'Toronto'));
graph.addEdge('Montreal', 'Toronto');
console.log(graph.hasEdge('Montreal', 'Toronto'));
console.log(graph.hasEdge('Toronto', 'Montreal'));
console.log(graph.hasEdge('Montreal', 'Ottawa'));
graph.printGraph();