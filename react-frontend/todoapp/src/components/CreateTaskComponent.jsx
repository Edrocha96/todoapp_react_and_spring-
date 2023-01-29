import TaskService from '../service/TaskService'
import React, { Component } from 'react'

class CreateTaskComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nameTask: '',
            descriptionTask: '',
            dateTask: ''
        }
        this.changeNameTaskHandler = this.changeNameTaskHandler.bind(this);
        this.changeDescriptionTaskHandler = this.changeDescriptionTaskHandler.bind(this);
        this.saveOrUpdateTask = this.saveOrUpdateTask.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TaskService.getTaskById(this.state.id).then( (res) =>{
                let task = res.data;
                this.setState({nameTask: task.nameTask,
                    descriptionTask: task.descriptionTask,
                    dateTask : task.dateTask
                });
            });
        }        
    }

    changeNameTaskHandler= (event) => {
        this.setState({nameTask: event.target.value});
    }

    changeDescriptionTaskHandler= (event) => {
        this.setState({descriptionTask: event.target.value});
    }


    cancel(){
        this.props.history.push('/task');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Tarefa</h3>
        }else{
            return <h3 className="text-center">Atualizar Tarefa</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nome Tarefa: </label>
                                            <input placeholder=" Nome Tarefa" name="nameTask" className="form-control" 
                                                value={this.state.nameTask} onChange={this.changeNameTaskHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Descrição Tarefa: </label>
                                            <input placeholder="Descrição Tarefa" name="descriptionTask" className="form-control" 
                                                value={this.state.descriptionTask} onChange={this.changeDescriptionTaskHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data: </label>
                                            <input placeholder="Data" name="dateTask" className="form-control" 
                                                value={this.state.dateTask} />
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }

}

export default CreateTaskComponent