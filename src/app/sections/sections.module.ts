import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ProjectsComponent } from './projects/projects.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [DashboardComponent, ScheduleComponent, ProjectsComponent, AnalyticsComponent, SettingsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    ScheduleComponent,
    ProjectsComponent,
    AnalyticsComponent,
    SettingsComponent
  ]
})
export class SectionsModule { }
