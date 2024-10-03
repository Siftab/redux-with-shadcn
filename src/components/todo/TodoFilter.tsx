
import React from "react";
import { Button } from "../ui/button";
import { DropdownMenuTrigger , DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,} from "../ui/dropdown-menu";

    type NameStateProps = {
      priority: string;
      setPriority: React.Dispatch<React.SetStateAction<string>>;
    };

    type props ={
      props : NameStateProps
    }
    
 

const TodoFilter:React.FC<props> = ({props}) => {
  // const {priority,setPriority}=props
  console.log(props.priority)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by Priority </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={props.priority} onValueChange={props.setPriority}>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
