const Arrayism = require('arrayism');
const Stringo = require('stringo');

const asm = new Arrayism();
const so = new Stringo();

class Frustration{
	constructor(){
		this.string = {
			breakStr: so.breakStr,
			changeCase: so.changeCase,
			chunk: so.chunk,
			clear: so.clear,
			count: so.count,
			distance: so.distance,
			has: so.has,
			insertBefore: so.insertBefore,
			insertAfter: so.insertAfter,
			join: so.join,
			nth: so.nth,
			random: so.random,
			remove: so.remove,
			removeWhitespace: so.removeWhitespace,
			reverse: so.reverse,
			shuffle: so.shuffle,
			sortChars: so.sortChars,
			sortWords: so.sortWords,
			unique: so.unique,
			words: so.words
		}
		this.array = {
			changeCase: asm.changeCase,
			chunk: asm.chunk,
			clean: asm.clean,
			clear: asm.clear,
			clone: asm.clone,
			count: asm.count,
			distance: asm.distance,
			filter: asm.filter,
			flatten: asm.flatten,
			get: asm.get,
			getArrayInfo: asm.getArrayInfo,
			getPiece: asm.getPiece,
			insertBefore: asm.insertBefore,
			insertAfter: asm.insertAfter,
			join: asm.join,
			joinDiff: asm.joinDiff,
			sum: asm.sum,
			difference: asm.difference,
			product: asm.product,
			quotient: asm.quotient,
			average: asm.average,
			min: asm.min,
			max: asm.max,
			nth: asm.nth,
			pollute: asm.pollute,
			random: asm.random,
			remove: asm.remove,
			replace: asm.replace,
			shuffle: asm.shuffle,
			asort: asm.asort,
			dsort: asm.dsort,
			swap: asm.swap,
			type: asm.type,
			unique: asm.unique,
			unzipObj: asm.unzipObj,
			walk: asm.walk,
			zipObj: asm.zipObj
		}
	}
}

module.exports = Frustration;
