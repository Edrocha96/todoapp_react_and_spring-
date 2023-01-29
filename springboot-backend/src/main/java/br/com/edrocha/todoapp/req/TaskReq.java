package br.com.edrocha.todoapp.req;

import java.util.Date;

import br.com.edrocha.todoapp.entity.Adaptable;
import br.com.edrocha.todoapp.entity.IRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class TaskReq implements IRequest, Adaptable{
	
	private String idTask;
	
	private String nameTask;

	private String descriptionTask;

	private Date dateTask;
}
