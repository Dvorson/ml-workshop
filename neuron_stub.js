class Neuron {
	constructor(bias=1, learningRate=0.1, weigths=[]) {
		this.bias = bias;
		this.learningRate = learningRate;
		this.weights = weights;
		this.trainingSet = [];
	}

	activate(value) {
		return value >=0 ? 1 : 0;
	}

	weightedSum(inputs=this.inputs, weights=this.weights) {}

	evaluate(inputs) {
		return this.activate(this.weightedSum(inputs));
	}

	init(inputs, bias=this.bias) {
		this.weights = [...inputs.map(i => Math.random()), bias];
	}

	delta(actual, expected, input, learningRate=this.learningRate) {
		const error = expected - actual;
		return error * learningRate * input;
	}

	train(inputs, expected) {}

	learn(iterationCallback=()=>{}, trainingSet=this.trainingSet) {}

	predict() {}

}