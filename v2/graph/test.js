const adjacencyList = require('./adjacencyList');
const adjacencyMatrix = require('./adjacencyMatrix');
const graphImplementation = require('./index').graphImplementation;

describe('Graph implementations defined properly', () => {
    test('Can create adjacencyList using createGraph()', () => {
        expect(typeof adjacencyList.createGraph).toEqual('function');
        let adjList = adjacencyList.createGraph();
        expect(typeof adjList).toEqual('object');
        expect(adjList.implementation).toEqual(graphImplementation.adjList);
    });
      
    test('Can create adjacencyMatrix using createGraph()', () => {
        expect(typeof adjacencyMatrix.createGraph).toEqual('function');
        let adjMatrix = adjacencyMatrix.createGraph();
        expect(typeof adjMatrix).toEqual('object');
        expect(adjMatrix.implementation).toEqual(graphImplementation.adjMatrix);
    });

    test('adjacencyList module defines all necessary graph functions', () => {
        expect(typeof adjacencyList.addVertex).toEqual('function');
        expect(typeof adjacencyList.hasVertex).toEqual('function');
        expect(typeof adjacencyList.getVertices).toEqual('function');
        expect(typeof adjacencyList.addEdge).toEqual('function');
        expect(typeof adjacencyList.hasEdge).toEqual('function');
    });

    test('adjacencyMatrix object has all necessary graph functions', () => {
        let adjMatrix = adjacencyMatrix.createGraph();
        expect(typeof adjMatrix.addVertex).toEqual('function');
        expect(typeof adjMatrix.hasVertex).toEqual('function');
        expect(typeof adjMatrix.getVertices).toEqual('function');
        expect(typeof adjMatrix.addEdge).toEqual('function');
        expect(typeof adjMatrix.hasEdge).toEqual('function');
    });
});

describe('addVertex', () => {
    test('addVertex adds one vertex to empty graph', () => {
        let graph = adjacencyList.createGraph();
        let v = 'Montreal';
        expect(adjacencyList.hasVertex(graph, v)).toBe(false);
        adjacencyList.addVertex(graph, v);
        expect(adjacencyList.hasVertex(graph, v)).toBe(true);
    });

    // test('addVertex adds multiple vertices', () => {
    //     let graph = makeGraph(false);
    //     let vertOne = 'Montreal';
    //     let vertTwo = 'Toronto';
    //     let vertThree = 'Ottawa';
    //     let vertFour = 'Vancouver';
    //     let vertFive = 'Halifax';
    //     expect(graph.hasVertex(vert)).toBe(false);
    //     graph.addVertex(vertOne);
    //     graph.addVertex(vertOne);
    //     graph.addVertex(vertOne);
    //     graph.addVertex(vertOne);
    //     graph.addVertex(vertOne);
    //     expect(graph.getVertexAt(vertIndex)).toEqual(vert);
    //     expect(graph.hasVertex(vert)).toBe(true);
    // });
});