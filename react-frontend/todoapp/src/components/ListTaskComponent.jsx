import React, { Component } from 'react'
import TaskService from '../service/TaskService'
import {useNavigate} from 'react-router-dom';

class ListTaskComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
                task: []
        }
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(id){
        TaskService.deleteTask(id).then( res => {
            this.setState({task: this.state.task.filter(task => task.id !== id)});
        });
    }
    viewTask(id){
        this.props.history.push(`/view-task/${id}`);
    }
    editTask(id){
        this.props.history.push(`/add-task/${id}`);
    }

    componentDidMount(){
        TaskService.getTask().then((res) => {
            this.setState({ task: res.data});
        });
    }

    addTask(){
        console.log("add task")
        console.log("Link", this.props.history)
        this.props.history.push("/add-task");
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Minhas Tarefas</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTask}> Adicionar Tarefa</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nome Tarefa</th>
                                    <th> Descrição Tarefa</th>
                                    <th> Data Tarefa</th>
                                    <th> Ações</th>
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.task.map(
                                        task => 
                                        <tr key = {task.idTask}>
                                             <td> {task.nameTask} </td>   
                                             <td> {task.descriptionTask}</td>
                                             <td> {task.dateTask}</td>
                                             <td>
                                                 <button onClick={ () => this.editTask(task.idTask)} className="btn btn-info">Atualizar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTask(task.idTask)} className="btn btn-danger">Excluir</button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewTask(task.idTask)} className="btn btn-info">Detalhes</button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>}
                        </table>
                 </div>
            </div>
        )
    }

}

export default ListTaskComponent