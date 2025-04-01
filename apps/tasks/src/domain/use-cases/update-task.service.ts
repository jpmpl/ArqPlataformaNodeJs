import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { TasksRepositoryService } from
    '@tasks/infrastructure/database/repositories/tasks.repository.service';
import { UsersRepositoryService } from
    '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { UpdateTaskDto } from '@tasks/gateways/controllers/dtos/update-task.dto';
import { ITask } from '@tasks/domain/interfaces/task.interface';

@Injectable()
export class UpdateTaskService implements BaseUseCase {
    constructor(
        private readonly usersRepository: UsersRepositoryService,
        private readonly tasksRepository: TasksRepositoryService,
    ) { }
    async execute(payload: {
        task: UpdateTaskDto;
        userId: number;
    }): Promise<ITask> {
        const userData = await this.usersRepository.findById(payload.userId);
        if (!userData) {
            throw new Error('Usuário não encontrado');
        }
        await this.tasksRepository.updateById(payload.task);
        const task = this.tasksRepository.findById(payload.task.id);
        if (!task) {
            throw new Error('Tarefa não encontrado');
        }
        return task;
    }
}