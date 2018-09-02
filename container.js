/*
 * @Author: Anwar-ul-haq 
 * @Date: 2018-09-02 22:11:26 
 * @Last Modified by: Anwar
 * @Last Modified time: 2018-09-02 22:54:58
 */
/*
    Register our dependencies which we need in  almost every files
    we register our dependencies using the library dependable
*/
const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const simpleDependencies = [
	['_','lodash'],
	['async','async']
];

simpleDependencies.forEach(function(val){
	container.register(val[0] , function(){
		return require(val[1]);
	});
});

container.load(path.join(__dirname ,'/controllers'));
container.load(path.join(__dirname ,'/helpers'));

container.register('container' , function(){
	return container;
});

module.exports = container;