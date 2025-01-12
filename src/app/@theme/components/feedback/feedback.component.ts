import { Component, Input } from "@angular/core";
import { IButton } from "../../interfaces/IButton";

@Component({
    selector: "feedback",
    templateUrl: "./feedback.component.html",
    styleUrls: ["./feedback.component.css"],
})
export class FeedbackComponent {
    @Input() image;
    @Input() message: IMessage;
    @Input() buttons: IButton[];
}

export interface IMessage {
    text: string;
}
