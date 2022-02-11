import { TaskRepository } from '../repository/task.repository';

export class TaskService {

	private taskRepository: TaskRepository;

	constructor() {
		this.taskRepository = new TaskRepository();
	}

	async getTasks() {
		return await this.taskRepository.getTasks();
	}

	async createTask(task:any) {
		return await this.taskRepository.createTask(task);
	}

	async updateTask(task:any) {
		return await this.taskRepository.updateTask(task);
	}

	async deleteTask(taskId:any) {
		return await this.taskRepository.deleteTask(taskId);
	}

}