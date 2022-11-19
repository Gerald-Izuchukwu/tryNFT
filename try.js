import nfts from './metadata.js';
const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;

//create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		// width: w,
		// height: h,
		wireframes: false,
	},
});

// creating nfts via attr
const nftBodies = nfts.map((nft) => {
	const { attributes } = nft;
	const attributeHashMap = {}; //creates an object
	attributes.forEach((attr) => {
		// console.log(attr);
		attributeHashMap[attr.trait_type.toLowerCase()] = attr.value;
		// assigning  the attribute trait type to the attribute value
	});

	if (attributeHashMap.shape.toLowerCase() === 'rectangle') {
		//since in reformed attribute shape is the key and rectangle is the value we are checking if
		//the value of shape to lower case === rectangle
		const rectangleObj = Bodies.rectangle(
			attributeHashMap.positionx,
			attributeHashMap.positiony,
			attributeHashMap.width,
			attributeHashMap.height,
			{
				render: {
					fillStyle: attributeHashMap.color,
					strokeStyle: 'grey',
					lineWidth: 3,
				},
			}
		);
		return rectangleObj;
	}

	if (attributeHashMap.shape.toLowerCase() === 'polygon') {
		const triangleObj = Bodies.polygon(
			attributeHashMap.positionx,
			attributeHashMap.positiony,
			attributeHashMap.sides,
			attributeHashMap.radius,
			{
				render: {
					fillStyle: attributeHashMap.color,
					strokeStyle: 'grey',
					lineWidth: 3,
				},
			}
		);
		return triangleObj;
	}

	if (attributeHashMap.shape.toLowerCase() === 'circle') {
		const circleObj = Bodies.circle(
			attributeHashMap.positionx,
			attributeHashMap.positiony,
			attributeHashMap.radius,
			{
				render: {
					fillStyle: attributeHashMap.color,
					strokeStyle: 'grey',
					lineWidth: 3,
				},
			}
		);
		return circleObj;
	}

	if (attributeHashMap.shape.toLowerCase() === 'oval') {
		const circleObj = Bodies.circle(
			attributeHashMap.positionx,
			attributeHashMap.positiony,
			attributeHashMap.radius,
			{
				render: {
					fillStyle: attributeHashMap.color,
					strokeStyle: 'grey',
					lineWidth: 3,
				},
			}
		);
		return circleObj;
	}

	if (attributeHashMap.shape.toLowerCase() === 'square') {
		const squareObj = Bodies.polygon(
			attributeHashMap.positionx,
			attributeHashMap.positiony,
			attributeHashMap.sides,
			attributeHashMap.radius,
			{
				render: {
					fillStyle: attributeHashMap.color,
					strokeStyle: 'grey',
					lineWidth: 3,
				},
			}
		);
		return squareObj;
	}

	if (attributeHashMap.shape.toLowerCase() === 'triangle') {
		const triangleObj = Bodies.polygon(
			attributeHashMap.positionx,
			attributeHashMap.positiony,
			attributeHashMap.sides,
			attributeHashMap.radius,
			{
				render: {
					fillStyle: attributeHashMap.color,
					strokeStyle: 'grey',
					lineWidth: 3,
				},
			}
		);
		return triangleObj;
	}
});

// const addNFTBodies = () => {
// 	const nftBoxes2 = nfts2.map((nft) => {
// 		const { attributes } = nft;
// 		const attributeHashMap = {}; //creates an object
// 		attributes.forEach((attr) => {
// 			console.log(attr);
// 			attributeHashMap[attr.trait_type.toLowerCase()] = attr.value;
// 			// assigning  the attribute trait type to the attribute value
// 		});

// 		if (attributeHashMap.shape.toLowerCase() === 'rectangle') {
// 			//since in reformed attribute shape is the key and rectangle is the value we are checking if
// 			//the value of shape to lower case === rectangle
// 			const rectangleObj = Bodies.rectangle(
// 				attributeHashMap.positionx,
// 				attributeHashMap.positiony,
// 				attributeHashMap.width,
// 				attributeHashMap.height,
// 				{
// 					render: {
// 						fillStyle: attributeHashMap.color,
// 						strokeStyle: 'grey',
// 						lineWidth: 3,
// 					},
// 				}
// 			);
// 			return rectangleObj;
// 		}

// 		if (attributeHashMap.shape.toLowerCase() === 'polygon') {
// 			const triangleObj = Bodies.polygon(
// 				attributeHashMap.positionx,
// 				attributeHashMap.positiony,
// 				attributeHashMap.sides,
// 				attributeHashMap.radius,
// 				{
// 					render: {
// 						fillStyle: attributeHashMap.color,
// 						strokeStyle: 'grey',
// 						lineWidth: 3,
// 					},
// 				}
// 			);
// 			return triangleObj;
// 		}

// 		if (attributeHashMap.shape.toLowerCase() === 'circle') {
// 			const circleObj = Bodies.circle(
// 				attributeHashMap.positionx,
// 				attributeHashMap.positiony,
// 				attributeHashMap.radius,
// 				{
// 					render: {
// 						fillStyle: attributeHashMap.color,
// 						strokeStyle: 'grey',
// 						lineWidth: 3,
// 					},
// 				}
// 			);
// 			return circleObj;
// 		}

// 		if (attributeHashMap.shape.toLowerCase() === 'oval') {
// 			const circleObj = Bodies.circle(
// 				attributeHashMap.positionx,
// 				attributeHashMap.positiony,
// 				attributeHashMap.radius,
// 				{
// 					render: {
// 						fillStyle: attributeHashMap.color,
// 						strokeStyle: 'grey',
// 						lineWidth: 3,
// 					},
// 				}
// 			);
// 			return circleObj;
// 		}

// 		if (attributeHashMap.shape.toLowerCase() === 'square') {
// 			const squareObj = Bodies.polygon(
// 				attributeHashMap.positionx,
// 				attributeHashMap.positiony,
// 				attributeHashMap.sides,
// 				attributeHashMap.radius,
// 				{
// 					render: {
// 						fillStyle: attributeHashMap.color,
// 						strokeStyle: 'grey',
// 						lineWidth: 3,
// 					},
// 				}
// 			);
// 			return squareObj;
// 		}

// 		if (attributeHashMap.shape.toLowerCase() === 'triangle') {
// 			const triangleObj = Bodies.polygon(
// 				attributeHashMap.positionx,
// 				attributeHashMap.positiony,
// 				attributeHashMap.sides,
// 				attributeHashMap.radius,
// 				{
// 					render: {
// 						fillStyle: attributeHashMap.color,
// 						strokeStyle: 'grey',
// 						lineWidth: 3,
// 					},
// 				}
// 			);
// 			return triangleObj;
// 		}
// 	});
// 	// console.log(nftBoxes2);
// 	console.log(triangleObj);
// };

// creating ground

const ground = Bodies.rectangle(400, 610, 810, 60, {
	// isSensor: true,
	// isSleeping: true,
	isStatic: true,
	render: {
		fillStyle: 'red',
	},
});

// add all the bodies to the world
Composite.add(engine.world, [...nftBodies, ground]);

Render.run(render);

const runner = Runner.create();

Runner.run(runner, engine);
