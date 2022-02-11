import { APILogger } from '../logger/api.logger'
import { TaskService } from '../service/task.service';

export class TaskController {

	private taskService: TaskService;
	private logger: APILogger;

	constructor() {
		this.taskService = new TaskService();
		this.logger = new APILogger()
	}

	async getTasks() {
		this.logger.info('Controller: getTasks', null)
		return await this.taskService.getTasks();
	}

	async createTask(task:any) {
		this.logger.info('Controller: createTask', task);
		return await this.taskService.createTask(task);
	}

	async updateTask(task:any) {
		this.logger.info('Controller: updateTask', task);
		return await this.taskService.updateTask(task);
	}

	async deleteTask(taskId:any) {
		this.logger.info('Controller: deleteTask', taskId);
		return await this.taskService.deleteTask(taskId);
	}
}