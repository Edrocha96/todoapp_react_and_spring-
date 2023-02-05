package br.com.edrocha.todoapp.adapter;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import br.com.edrocha.todoapp.entity.Task;
import br.com.edrocha.todoapp.resp.TaskResp;

@Component
public class TaskRespAdapter implements IDefaultAdapter<Task, TaskResp> {
	
	private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
	
	@Override
	public TaskResp adapt(Task input) {
		return TaskResp.builder().
				idTask(input.getIdTask()).
				nameTask(input.getNameTask()).
				descriptionTask(input.getDescriptionTask()).
				dateTask(formatter.format(input.getDateTask())).build();
				
	

	}
	
	public List<TaskResp> adapt(List<Task> inputList){
		return inputList.stream().map(input -> adapt(input)).collect(Collectors.toList());
		
	}

}
