export type CreateTodoItemDto = {
  name : string;
}


export type UpdateTodoItemDto = {
  name : string;
  memo : string;
  imageUrl : string;
  isCompleted : boolean;
}