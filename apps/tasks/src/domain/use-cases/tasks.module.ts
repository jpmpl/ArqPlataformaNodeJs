import { Module } from '@nestjs/common';
import { GetAllTasksService } from './get-all-tasks.service';
import { GetTaskByIdService } from './get-task-by-id.service';
import { CreateTaskService } from './create-task.service';
import { UpdateTaskService } from './update-task.service';
import { InfrastructureModule } from
  '@tasks/infrastructure/infrastructure.module';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { ProjectsRepositoryService } from '@project-manager-api/infrastructure/database/repositories/projects.repository.service';

@Module({
  imports: [InfrastructureModule],
  providers: [
    GetAllTasksService,
    GetTaskByIdService,
    CreateTaskService,
    UpdateTaskService,
    UsersRepositoryService,
    ProjectsRepositoryService
  ],
  exports: [
    GetAllTasksService,
    GetTaskByIdService,
    CreateTaskService,
    UpdateTaskService,
  ],
})
export class TasksModule { }