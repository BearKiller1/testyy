import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';
import { AnalyticsComponent } from './sections/analytics/analytics.component';
import { SettingsComponent } from './sections/settings/settings.component';

const routes: Routes = [
{
  path:"dashboard",
  component:DashboardComponent,
},
{
  path:"projects",
  component:ProjectsComponent,
},
{
  path:"schedule",
  component:ScheduleComponent,
},
{
  path:"analytics",
  component:AnalyticsComponent,
},
{
  path:"settings",
  component:SettingsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
