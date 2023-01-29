package br.com.edrocha.todoapp.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.edrocha.todoapp.req.TaskReq;
import br.com.edrocha.todoapp.resp.TaskResp;
import br.com.edrocha.todoapp.service.TaskService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/to-do-app")
public class TaskController {
	
	private TaskService toDoAppService;
	
	public TaskController(TaskService toDoAppService) {
		this.toDoAppService = toDoAppService;
	}

	@GetMapping("/all-registers")
	public ResponseEntity<List<TaskResp>> findAll(){
		return ResponseEntity.ok(toDoAppService.findAll());
	}
	
	@PostMapping("/save-task")
	public ResponseEntity<Void> saveTask(@RequestBody TaskReq req) {
		toDoAppService.save(req);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/delete-task")
	public ResponseEntity<Void> deleteTask(@RequestBody TaskReq req) {
		toDoAppService.delete(req);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/update-task")
	public ResponseEntity<Void> updateTask(@RequestBody TaskReq req) {
		toDoAppService.update(req);
		return ResponseEntity.ok().build();
	}

}
