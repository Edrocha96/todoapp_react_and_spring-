package br.com.edrocha.todoapp.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import br.com.edrocha.todoapp.adapter.TaskReqAdapter;
import br.com.edrocha.todoapp.adapter.TaskRespAdapter;
import br.com.edrocha.todoapp.entity.Task;
import br.com.edrocha.todoapp.repository.TaskRepository;
import br.com.edrocha.todoapp.req.TaskReq;
import br.com.edrocha.todoapp.resp.TaskResp;

@Service
public class TaskService {
	
	private static Logger logger = LoggerFactory.getLogger(TaskService.class);
	
	private TaskRespAdapter taskAdapter;
	
	private TaskReqAdapter taskReqAdapter;
	
	private TaskRepository taskRepository;
	
	public TaskService(TaskRespAdapter taskAdapter, TaskReqAdapter taskReqAdapter, TaskRepository taskRepository) {
		this.taskAdapter = taskAdapter;
		this.taskReqAdapter = taskReqAdapter;
		this.taskRepository = taskRepository;
	}
	
	public List<TaskResp> findAll(){
		return taskAdapter.adapt(taskRepository.findAll());	
	}
	
	public void save(TaskReq req) {
		try {
			Task task = taskReqAdapter.adapt(req);
			taskRepository.save(task);
		} catch (Exception e) {
			logger.error("Problemas ao salvar a tarefa.", e);
		}
		
	}
	
	public void update(TaskReq req) {
		try {
			Task task = taskReqAdapter.adapt(req);
			taskRepository.save(task);
		} catch (Exception e) {
			logger.error("Problemas ao atualizar a tarefa.", e);
		}
		
	}
	
	public void delete(TaskReq req) {
		try {
			Task task = taskReqAdapter.adapt(req);
			taskRepository.delete(task);
		} catch (Exception e) {
			logger.error("Problemas ao excluir a tarefa.", e);
		}
	}

	

}
