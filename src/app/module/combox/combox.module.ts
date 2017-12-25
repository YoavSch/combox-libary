import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ComboxComponent} from "./combox.component";
import {BsDropdownConfig, BsDropdownModule} from "ngx-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
  imports: [BrowserModule, BsDropdownModule, CommonModule],
  declarations: [ComboxComponent],
  exports: [ComboxComponent],
  providers: [BsDropdownConfig]
})
export class ComboxModule {
}
