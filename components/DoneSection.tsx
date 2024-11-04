import { TaskStatus } from "@/config/enum";
import Label from "./Label";

export default function DoneSection () {
  return (
    <section className="desktop:col-start-7 desktop:-col-end-1">
      <Label title={TaskStatus.done}/>

    </section>
  )

}