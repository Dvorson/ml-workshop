class Neuron {
	/**
	 * @param {Number} bias - вес вывода (в случае одного нейрона всегда 1)
	 * @param {Number} learningRate - шаг обучения (Слишком большой шаг - высокая вероятность "проскочить" нужное значение, слишком малый - долгое обучение)
	 * @param {Array} weights - инициализация "веса" для каждого ввода нейрона
	 *
	 * @public
	 */
	constructor(bias=1, learningRate=0.1, weigths=[]) {
		this.bias = bias;
		this.learningRate = learningRate;
		this.weights = weights;
		this.trainingSet = [];
	}

	/**
	 * Метод активации
	 * @param {Number} value - значение weightedSum
	 *
	 * @returns {Number}
	 *
	 * @public
	 */
	activate(value) {
		return value >=0 ? 1 : 0;
	}

	/**
	 * Метод расчета суммы произведений входящих значений на веса
	 * @param {Array} inputs - ввод
	 * @param {Array} weights - веса
	 * @returns {Number}
	 *
	 * @public
	 */
	weightedSum(inputs=this.inputs, weights=this.weights) {}

	/**
	 * Метод активации
	 * @param {Array} inputs - ввод
	 * @returns {Number}
	 *
	 * @public
	 */
	evaluate(inputs) {
		return this.activate(this.weightedSum(inputs));
	}

	/**
	 * Метод инициализации (проставление рандомных весов)
	 * @param {Array} inputs - ввод
	 * @param {Number} bias - вес вывода (в случае одного нейрона всегда 1)
	 * @returns {Number}
	 *
	 * @public
	 */
	init(inputs, bias=this.bias) {
		this.weights = [...inputs.map(i => Math.random()), bias];
	}

	/**
	 * Метод вычисления величины изменения каждого веса в случае ошибки
	 * @param {Number} actual - значение вывода нейрона на текущей выборке
	 * @param {Number} expected - ожидаемое значение вывода
	 * @param {Array} input - значение ввода на текущем шаге
	 * @param {Number} learningRate - шаг обучения
	 * @returns {Number} - величина изменения веса для текущего ввода
	 *
	 * @public
	 */
	delta(actual, expected, input, learningRate=this.learningRate) {
		const error = expected - actual;
		return error * learningRate * input;
	}

	/**
	 * Метод тренировки нейрона на одной обучающей выборке
	 * @param {Array} inputs - входящая выборка
	 * @param {Number} expected - ожидаемое значение вывода
	 *
	 * @returns {Array|Boolean} - Измененные веса, либо true если вывод совпал с ожиданием
	 *
	 */
	train(inputs, expected) {}

	/**
	 * Метод обучения на обучающем наборе
	 * @param {Function} iterationCallback - обратный вызов для каждой итерации
	 * @param {Array} trainingSet - обучающий набор
	 *
	 */
	learn(iterationCallback=()=>{}, trainingSet=this.trainingSet) {}

}

module.exports = Neuron;
