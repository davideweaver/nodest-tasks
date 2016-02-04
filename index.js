"use strict"

const Nodest = require("nodest");

class NodestTasks extends Nodest.Extension {

	on(event, arg) {
		
		// boot
		if (event == "boot") {
			// setup namespace
			Nodest.Scheduler = require("./lib/scheduler.js");
			Nodest.Task = require("./lib/task.js");
			
			// setup scheduler
			this.app.scheduler = new Nodest.Scheduler(this.app.pathContext, this.app);
		}
		
		// setup new controller
		if (event == "space-create") {
			var space = arg;
			
			// space.scheduler
			space.scheduler = new Nodest.Scheduler(space.pathContext, this.app);
		}
		
	}
}

module.exports = NodestTasks;
