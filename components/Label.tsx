import { TaskStatus } from "@/config/enum";
import TodoLabelSvg from "@/public/todoLabel.svg";
import DoneLabelSvg from "@/public/doneLabel.svg";

export default function Label ({title} : {title : string}) {

  return (
    <>
    {
      title === TaskStatus.todo ? <TodoLabelSvg /> : <DoneLabelSvg />
    }
    </>
  )
  
}