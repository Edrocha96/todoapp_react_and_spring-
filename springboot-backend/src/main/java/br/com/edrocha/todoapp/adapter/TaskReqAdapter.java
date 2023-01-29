package br.com.edrocha.todoapp.adapter;

import org.springframework.stereotype.Component;

import br.com.edrocha.todoapp.entity.Task;
import br.com.edrocha.todoapp.req.TaskReq;

@Component
public class TaskReqAdapter implements IDefaultAdapter<TaskReq, Task>{

	@Override
	public Task adapt(TaskReq req) {	
		return Task.builder().
			 idTask(req.getIdTask()).
			 nameTask(req.getNameTask()).
			 descriptionTask(req.getDescriptionTask()).
			 dateTask(req.getDateTask()). build();
	}

}
