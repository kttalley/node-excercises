var prefix = 'Relaying: ';

prefix = 'Attention: ';

module.exports = function (message) {
	console.log(prefix + message);
};