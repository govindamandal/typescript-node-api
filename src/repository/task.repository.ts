import { connect, disconnect } from "../config/db.config";
import { TaskModel } from '../models/task.model';
import { APILogger } from '../logger/api.logger';

export class TaskRepository {

	private logger: APILogger;

	constructor() {
		connect();
		this.logger = new APILogger()
	}

	async getTasks() {
		const tasks = await TaskModel.find({});
		console.log('tasks:::', tasks);
		return tasks;
	}

	async createTask(task:any) {
		let data = {};
		try {
			data = await TaskModel.create(task);
		} catch (err) {
			this.logger.error('Error::' + err);
		}
		return data;
	}

	async updateTask(task:any) {
		let data = {};
		try {
			data = await TaskModel.updateOne(task);
		} catch (err) {
			this.logger.error('Error::' + err);
		}
		return data;
	}

	async deleteTask(taskId:any) {
		let data: any = {};
		try {
			data = await TaskModel.deleteOne({ _id: taskId });
		} catch (err) {
			this.logger.error('Error::' + err);
		}
		return { status: `${data.deletedCount > 0 ? true : false}` };
	}
}