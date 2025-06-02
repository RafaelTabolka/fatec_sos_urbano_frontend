import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { HowReportComponent } from './pages/how-report/how-report.component';
import { UserForgetItPasswordComponent } from './pages/user/user-forget-it-password/user-forget-it-password.component';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { UserMakeReportComponent } from './pages/user/user-make-report/user-make-report.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AdminReportsComponent } from './pages/admin/admin-reports/admin-reports.component';
import { AdminInstitutionsComponent } from './pages/admin/admin-institutions/admin-institutions.component';
import { AdminManageIncidentsComponent } from './pages/admin/admin-manage-incidents/admin-manage-incidents.component';
import { AdminStatisticsComponent } from './pages/admin/admin-statistics/admin-statistics.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent
    },
    // {
    //     path: 'about-us',
    //     pathMatch: 'full',
    //     component: AboutUsComponent
    // },
    // {
    //     path: 'complaints',
    //     pathMatch: 'full',
    //     component: ComplaintsComponent
    // },
    // {
    //     path: 'faq',
    //     pathMatch: 'full',
    //     component: FaqComponent
    // },
    {
        path: 'how-report',
        pathMatch: 'full',
        component: HowReportComponent
    },
    // {
    //     path: 'terms-of-use',
    //     pathMatch: 'full',
    //     component: TermsOfUseComponent
    // },
    {
        path: 'user-forget-it-password',
        pathMatch: 'full',
        component: UserForgetItPasswordComponent
    },
    {
        path: 'user-login',
        pathMatch: 'full',
        component: UserLoginComponent
    },
    {
        path: 'user-make-report',
        pathMatch: 'full',
        component: UserMakeReportComponent
    },
    {
        path: 'user-register',
        pathMatch: 'full',
        component: UserRegisterComponent
    },
    {
        path: 'admin-institutions',
        pathMatch: 'full',
        component: AdminInstitutionsComponent
    },
    {
        path: 'admin-manage-incidents',
        pathMatch: 'full',
        component: AdminManageIncidentsComponent
    },
    {
        path: 'admin-reports',
        pathMatch: 'full',
        component: AdminReportsComponent
    },
    {
        path: 'admin-statistics',
        pathMatch: 'full',
        component: AdminStatisticsComponent
    },
    {
        path: 'admin-users',
        pathMatch: 'full',
        component: AdminUsersComponent
    }
];