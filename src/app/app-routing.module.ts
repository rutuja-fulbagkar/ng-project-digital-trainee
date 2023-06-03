import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FranchiseComponent } from './components/contact/franchise/franchise.component';
import { EnquiryComponent } from './components/contact/enquiry/enquiry.component';
import { AboutUsComponent } from './components/about-us/about-us/about-us.component';
import { OurTeamComponent } from './components/about-us/our-team/our-team.component';
import { OurTrainersComponent } from './components/about-us/our-trainers/our-trainers.component';
import { CorporatePracticalDigitalMarketingCourseComponent } from './components/courses/corporate-practical-digital-marketing-course/corporate-practical-digital-marketing-course.component';
import { DigitalMarketingAgencyCourseComponent } from './components/courses/digital-marketing-agency-course/digital-marketing-agency-course.component';
import { OnlineDigitalMarketingCourseComponent } from './components/courses/online-digital-marketing-course/online-digital-marketing-course.component';
import { DigitalMarketingCourseComponent } from './components/courses/digital-marketing-course/digital-marketing-course.component';
import { PlacementsCompaniesComponent } from './components/placements/placements-companies/placements-companies.component';
import { OurPlacementsComponent } from './components/placements/our-placements/our-placements.component';
import { WhyChooseDigitalMarketingCourseWithUsComponent } from './components/why-choose-us/why-choose-digital-marketing-course-with-us/why-choose-digital-marketing-course-with-us.component';
import { SuccessStoriesComponent } from './components/why-choose-us/success-stories/success-stories.component';
import { ReviewsAndTestimonialsComponent } from './components/why-choose-us/reviews-and-testimonials/reviews-and-testimonials.component';
import { FaqComponent } from './components/why-choose-us/faq/faq.component';
import { GalleryComponent } from './components/why-choose-us/gallery/gallery.component';
import { CurrentOpeningsComponent } from './components/career/current-openings/current-openings.component';
import { HireFromUsComponent } from './components/career/hire-from-us/hire-from-us.component';
import { LifeAtDigitaltraineeComponent } from './components/career/life-at-digitaltrainee/life-at-digitaltrainee.component';
import { DigitalMarketingKnowledgeBlogsComponent } from './components/knowledge/digital-marketing-knowledge-blogs/digital-marketing-knowledge-blogs.component';
import { DigitalMarketingKnowledgeVideosComponent } from './components/knowledge/digital-marketing-knowledge-videos/digital-marketing-knowledge-videos.component';
import { NalStopComponent } from './components/branches/nal-stop/nal-stop.component';
import { PimpriChinchwadComponent } from './components/branches/pimpri-chinchwad/pimpri-chinchwad.component';
import { VimanNagarComponent } from './components/branches/viman-nagar/viman-nagar.component';
import { HadapsarComponent } from './components/branches/hadapsar/hadapsar.component';
import { ThaneComponent } from './components/branches/thane/thane.component';
import { UdaipurComponent } from './components/branches/udaipur/udaipur.component';
import { TrivandrumComponent } from './components/branches/trivandrum/trivandrum.component';
import { SuratComponent } from './components/branches/surat/surat.component';
import { AhmedabadComponent } from './components/branches/ahmedabad/ahmedabad.component';
import { NagpurComponent } from './components/branches/nagpur/nagpur.component';
import { AndheriEastMumbaiComponent } from './components/branches/andheri-east-mumbai/andheri-east-mumbai.component';
import { TestingComponent } from './components/testing/testing.component';
import { FormComponent } from './components/form/form.component';
import { JobDetailsComponent } from './components/career/job-details/job-details.component';
import { JobDetailsOneComponent } from './components/career/job-details/job-details/job-details-one/job-details-one.component';
import { JobDetailsTwoComponent } from './components/career/job-details/job-details/job-details-two/job-details-two.component';
import { CareerApplicationSubmitComponent } from './components/career/career-application-submit/career-application-submit.component';


const routes: Routes = [
 {path: '' , component: HomeComponent},
 { path: 'franchise', component: FranchiseComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'our-trainers', component: OurTrainersComponent },
  {path:'corporate-practical-digital-marketing-course',component:CorporatePracticalDigitalMarketingCourseComponent},
  {path:'digital-marketing-agency-course',component:DigitalMarketingAgencyCourseComponent},
  {path:'online-digital-marketing-course',component:OnlineDigitalMarketingCourseComponent},
  {path:'digital-marketing-course',component:DigitalMarketingCourseComponent},
  {path:'our-placements',component:OurPlacementsComponent},
  {path:'placements-companies',component:PlacementsCompaniesComponent},
  {path:'why-choose-digital-marketing-course-with-us',component:WhyChooseDigitalMarketingCourseWithUsComponent},
  {path:'success-stories',component:SuccessStoriesComponent},
  {path:'review-and-testimonials',component:ReviewsAndTestimonialsComponent},
  {path:'faq',component:FaqComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'current-openings',component:CurrentOpeningsComponent},
  {path:'hire-from-us',component:HireFromUsComponent},
  {path:'life-at-digital-trainee',component:LifeAtDigitaltraineeComponent},
  {path:'blogs',component:DigitalMarketingKnowledgeBlogsComponent},
  {path:'videos',component:DigitalMarketingKnowledgeVideosComponent},
  {path:'branch-1',component:NalStopComponent},
  {path:'branch-2',component:PimpriChinchwadComponent},
  {path:'branch-3',component:VimanNagarComponent},
  {path:'branch-4',component:HadapsarComponent},
  {path:'branch-5',component:AndheriEastMumbaiComponent},
  {path:'branch-6',component:ThaneComponent},
  {path:'branch-7',component:UdaipurComponent},
  {path:'branch-8',component:TrivandrumComponent},
  {path:'branch-9',component:SuratComponent},
  {path:'branch-10',component:AhmedabadComponent},
  {path:'branch-11',component:NagpurComponent},
  {path:'testing',component:TestingComponent},
  {path:'form',component:FormComponent},//interview
  {path:'job-details',component:JobDetailsComponent},
  {path:'job-details-one',component:JobDetailsOneComponent},
  {path:'job-details-two',component:JobDetailsTwoComponent},
  {path:'career-application-submit',component:CareerApplicationSubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
