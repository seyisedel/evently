import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./pages/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'setup-profile',
    loadChildren: () => import('./pages/setup-profile/setup-profile.module').then( m => m.SetupProfilePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'event-type',
    loadChildren: () => import('./pages/event-type/event-type.module').then( m => m.EventTypePageModule)
  },
  {
    path: 'draft',
    loadChildren: () => import('./pages/draft/draft.module').then( m => m.DraftPageModule)
  },
  {
    path: 'select-event-type',
    loadChildren: () => import('./pages/select-event-type/select-event-type.module').then( m => m.SelectEventTypePageModule)
  },
  {
    path: 'event-cat',
    loadChildren: () => import('./pages/event-cat/event-cat.module').then( m => m.EventCatPageModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./pages/tickets/tickets.module').then( m => m.TicketsPageModule)
  },
  {
    path: 'new-ticket',
    loadChildren: () => import('./pages/new-ticket/new-ticket.module').then( m => m.NewTicketPageModule)
  },
  {
    path: 'fees',
    loadChildren: () => import('./pages/fees/fees.module').then( m => m.FeesPageModule)
  },
  {
    path: 'sales-start',
    loadChildren: () => import('./pages/sales-start/sales-start.module').then( m => m.SalesStartPageModule)
  },
  {
    path: 'sales-end',
    loadChildren: () => import('./pages/sales-end/sales-end.module').then( m => m.SalesEndPageModule)
  },
  {
    path: 'visibillity',
    loadChildren: () => import('./pages/visibillity/visibillity.module').then( m => m.VisibillityPageModule)
  },
  {
    path: 'sales-channel',
    loadChildren: () => import('./pages/sales-channel/sales-channel.module').then( m => m.SalesChannelPageModule)
  },
  {
    path: 'online-fees',
    loadChildren: () => import('./pages/online-fees/online-fees.module').then( m => m.OnlineFeesPageModule)
  },
  {
    path: 'atthedoot',
    loadChildren: () => import('./pages/atthedoot/atthedoot.module').then( m => m.AtthedootPageModule)
  },
  {
    path: 'event-setting',
    loadChildren: () => import('./pages/event-setting/event-setting.module').then( m => m.EventSettingPageModule)
  },
  {
    path: 'country',
    loadChildren: () => import('./pages/country/country.module').then( m => m.CountryPageModule)
  },
  {
    path: 'tax-options',
    loadChildren: () => import('./pages/tax-options/tax-options.module').then( m => m.TaxOptionsPageModule)
  },
  {
    path: 'add-new-tax',
    loadChildren: () => import('./pages/add-new-tax/add-new-tax.module').then( m => m.AddNewTaxPageModule)
  },
  {
    path: 'search-orders',
    loadChildren: () => import('./pages/search-orders/search-orders.module').then( m => m.SearchOrdersPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'guest-list',
    loadChildren: () => import('./pages/guest-list/guest-list.module').then( m => m.GuestListPageModule)
  },
  {
    path: 'ticket-details',
    loadChildren: () => import('./pages/ticket-details/ticket-details.module').then( m => m.TicketDetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./pages/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'about-app',
    loadChildren: () => import('./pages/about-app/about-app.module').then( m => m.AboutAppPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./pages/review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./pages/my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'followers',
    loadChildren: () => import('./pages/followers/followers.module').then( m => m.FollowersPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'privacy-draft',
    loadChildren: () => import('./pages/privacy-draft/privacy-draft.module').then( m => m.PrivacyDraftPageModule)
  },
  {
    path: 'edit-ticket',
    loadChildren: () => import('./pages/edit-ticket/edit-ticket.module').then( m => m.EditTicketPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'coupon',
    loadChildren: () => import('./pages/coupon/coupon.module').then( m => m.CouponPageModule)
  },
  {
    path: 'add-coupon',
    loadChildren: () => import('./pages/add-coupon/add-coupon.module').then( m => m.AddCouponPageModule)
  },
  {
    path: 'coupon-event',
    loadChildren: () => import('./modals/coupon-event/coupon-event.module').then( m => m.CouponEventPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
