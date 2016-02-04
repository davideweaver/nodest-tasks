"use strict";

const Nodest = require("nodest");

/**
* Base class for tasks. Derive your task class from this.
* @class
*/
class Task {

	constructor() {
		this.log = Nodest.Log.scoped("task");
	}

	/**
	* Execute the initializer.
	* @param {Nodest.Application} app the Application Instance
	* @param {object} arguments passed to the task on the command line
	* @param {function({Error} err)} callback The callback to be run upon completion
	*/
	exec(app, args, callback) {
	}

}

module.exports = Task;