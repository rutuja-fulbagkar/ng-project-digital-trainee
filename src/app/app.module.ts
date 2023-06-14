import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// added for validations
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
// side-nav
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OurTeamComponent } from './components/about-us/our-team/our-team.component';
import { OurTrainersComponent } from './components/about-us/our-trainers/our-trainers.component';
import { AhmedabadComponent } from './components/branches/ahmedabad/ahmedabad.component';
import { AndheriEastMumbaiComponent } from './components/branches/andheri-east-mumbai/andheri-east-mumbai.component';
import { HadapsarComponent } from './components/branches/hadapsar/hadapsar.component';
import { NagpurComponent } from './components/branches/nagpur/nagpur.component';
import { NalStopComponent } from './components/branches/nal-stop/nal-stop.component';
import { PimpriChinchwadComponent } from './components/branches/pimpri-chinchwad/pimpri-chinchwad.component';
import { SuratComponent } from './components/branches/surat/surat.component';
import { ThaneComponent } from './components/branches/thane/thane.component';
import { TrivandrumComponent } from './components/branches/trivandrum/trivandrum.component';
import { UdaipurComponent } from './components/branches/udaipur/udaipur.component';
import { VimanNagarComponent } from './components/branches/viman-nagar/viman-nagar.component';
import { CurrentOpeningsComponent } from './components/career/current-openings/current-openings.component';
import { HireFromUsComponent } from './components/career/hire-from-us/hire-from-us.component';
import { LifeAtDigitaltraineeComponent } from './components/career/life-at-digitaltrainee/life-at-digitaltrainee.component';
import { EnquiryComponent } from './components/contact/enquiry/enquiry.component';
import { FranchiseComponent } from './components/contact/franchise/franchise.component';
import { CorporatePracticalDigitalMarketingCourseComponent } from './components/courses/corporate-practical-digital-marketing-course/corporate-practical-digital-marketing-course.component';
import { DigitalMarketingAgencyCourseComponent } from './components/courses/digital-marketing-agency-course/digital-marketing-agency-course.component';
import { DigitalMarketingCourseComponent } from './components/courses/digital-marketing-course/digital-marketing-course.component';
import { OnlineDigitalMarketingCourseComponent } from './components/courses/online-digital-marketing-course/online-digital-marketing-course.component';
import { DigitalMarketingKnowledgeBlogsComponent } from './components/knowledge/digital-marketing-knowledge-blogs/digital-marketing-knowledge-blogs.component';
import { DigitalMarketingKnowledgeVideosComponent } from './components/knowledge/digital-marketing-knowledge-videos/digital-marketing-knowledge-videos.component';
import { OurPlacementsComponent } from './components/placements/our-placements/our-placements.component';
import { PlacementsCompaniesComponent } from './components/placements/placements-companies/placements-companies.component';
import { FaqComponent } from './components/why-choose-us/faq/faq.component';
import { GalleryComponent } from './components/why-choose-us/gallery/gallery.component';
import { ReviewsAndTestimonialsComponent } from './components/why-choose-us/reviews-and-testimonials/reviews-and-testimonials.component';
import { SuccessStoriesComponent } from './components/why-choose-us/success-stories/success-stories.component';
import { WhyChooseDigitalMarketingCourseWithUsComponent } from './components/why-choose-us/why-choose-digital-marketing-course-with-us/why-choose-digital-marketing-course-with-us.component';
import { SharebtnComponent } from './components/sharebtn/sharebtn.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/form/form.component';
import { TestingComponent } from './components/testing/testing.component';
import { JobDetailsComponent } from './components/career/job-details/job-details.component';
import { CareerApplicationSubmitComponent } from './components/career/career-application-submit/career-application-submit.component';
import { JobDetailsOneComponent } from './components/career/job-details/job-details/job-details-one/job-details-one.component';
import { JobDetailsTwoComponent } from './components/career/job-details/job-details/job-details-two/job-details-two.component';
import { PopupComponent } from './components/sharebtn/popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const Ux_Modules = [
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,

  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatListModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurTeamComponent,
    OurTrainersComponent,
    AhmedabadComponent,
    AndheriEastMumbaiComponent,
    HadapsarComponent,
    NagpurComponent,
    NalStopComponent,
    PimpriChinchwadComponent,
    SuratComponent,
    ThaneComponent,
    TrivandrumComponent,
    UdaipurComponent,
    VimanNagarComponent,
    CurrentOpeningsComponent,
    HireFromUsComponent,
    LifeAtDigitaltraineeComponent,
    EnquiryComponent,
    FranchiseComponent,
    CorporatePracticalDigitalMarketingCourseComponent,
    DigitalMarketingAgencyCourseComponent,
    DigitalMarketingCourseComponent,
    OnlineDigitalMarketingCourseComponent,
    DigitalMarketingKnowledgeBlogsComponent,
    DigitalMarketingKnowledgeVideosComponent,
    OurPlacementsComponent,
    PlacementsCompaniesComponent,
    FaqComponent,
    GalleryComponent,
    ReviewsAndTestimonialsComponent,
    SuccessStoriesComponent,
    WhyChooseDigitalMarketingCourseWithUsComponent,
    SharebtnComponent,
    FooterComponent,
    NavbarComponent,
    FormComponent,
    TestingComponent,
    JobDetailsComponent,
    CareerApplicationSubmitComponent,
    JobDetailsOneComponent,
    JobDetailsTwoComponent,
    PopupComponent,
    ThankYouComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ux_Modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
