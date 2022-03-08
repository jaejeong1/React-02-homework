import React from 'react'
import ListText from './ListText';

const List = React.memo(({ todoData, setTodoData, completed, handleClick, id, title, isEdit, provided, snapshot }) => {    
    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
          if (data.id === id) {
            data.completed = !data.completed
          }
          return data;
        })
        setTodoData(newTodoData);
      }

    const editToggle = (id) => {
      let newtodoData = todoData.map(data => {
        if (data.id === id) {
          data.isEdit = !data.isEdit;
        }
        return data;
      })
      setTodoData(newtodoData);
    }

    return (
      <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
      className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex item-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
      >
          <div className="flex items-center">
            <input type="checkbox" onChange={() => handleCompleteChange(id)} defaultChecked={false}/>
            <ListText id={id} title={title} isEdit={isEdit} completed={completed} todoData={todoData} setTodoData={setTodoData}/>
          </div>
                              
          <div className="items-center">
            <button className="px-4 py-2" onClick={()=> {editToggle(id)}}>수정</button>
            <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>삭제</button>
          </div>
        </div>
    )
});

export default List
