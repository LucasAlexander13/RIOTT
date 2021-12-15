import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NavegationHeaderComponent } from "./navegation-header/navegation-header.component";
import { HomePageComponent } from "./home-page.component";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { ThemeModule } from "src/app/@theme/theme.module";
import { RouterModule } from "@angular/router";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MembersComponent } from "./members/members.component";

@NgModule({
    declarations: [NavegationHeaderComponent, HomePageComponent, MembersComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        HomePageRoutingModule,
        ThemeModule,
        MatTabsModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        RouterModule,
    ],
})
export class HomePageModule {}
