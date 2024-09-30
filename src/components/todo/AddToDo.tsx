import React, { FormEvent } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { useAppDispatch, useAppSelector } from "@/redux/Hook";
// import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodoMutation } from "@/redux/Api/todoApi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AddToDo = () => {
  const [task, setTask] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [description, setDescription] = React.useState("");
  // const dispatch = useAppDispatch()
  const [addTodo, { data, isSuccess, isLoading }] = useAddTodoMutation();

  console.log({ data }, isSuccess, isLoading);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(addTodo({ title:task, description }));

    // addTodo({ title: task, description, priority });vlg
    console.log(({ title: task, description, priority }))
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add to do
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Add Task you Want to finish</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              id="task"
              className="col-span-3"
              onBlur={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              className="col-span-3"
              onBlur={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Priority</Label>
            <Select onValueChange={(value)=> setPriority(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="set priority" onChange={()=>console.log()} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Fruits</SelectLabel> */}
                  <SelectItem value="high">high</SelectItem>
                  <SelectItem value="medium">medium</SelectItem>
                  <SelectItem value="low">low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSubmit} type="submit">
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default AddToDo;
