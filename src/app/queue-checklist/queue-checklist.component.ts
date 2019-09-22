import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { ChecklistTemplateOneComponent } from "../checklist-template-one/checklist-template-one.component";
import { ChecklistTemplateTwoComponent } from "../checklist-template-two/checklist-template-two.component";
import { ChecklistTemplateThreeComponent } from "../checklist-template-three/checklist-template-three.component";

@Component({
  selector: "app-queue-checklist",
  templateUrl: "./queue-checklist.component.html",
  styleUrls: ["./queue-checklist.component.scss"]
})
export class QueueChecklistComponent implements OnInit {
  @Input() checkType;
  checkMap = {
    1: ChecklistTemplateOneComponent,
    2: ChecklistTemplateTwoComponent,
    3: ChecklistTemplateThreeComponent
  };
  @ViewChild("messagecontainer", { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(message) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(
      this.checkMap[this.checkType]
    );
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance[message] = message;
  }
  ngOnInit() {
    this.createComponent("hello");
  }
}
