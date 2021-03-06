import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FooterComponent } from './footer/footer.component';
import { GithubModule } from './github/github.module';
import { HeroModule } from './hero/hero.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ResumeModule } from './resume/resume.module';
import { SkillsModule } from './skills/skills.module';
import { SummaryComponent } from './summary/summary.component';
import { ThreeDComponent } from './three-d/three-d.component';
import { TipsModule } from './tips/tips.module';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                NavbarComponent,
                ContactDetailsComponent,
                SummaryComponent,
                FooterComponent,
                ThreeDComponent,
            ],
            imports: [
                HttpModule,
                SkillsModule,
                GithubModule,
                PortfolioModule,
                HeroModule,
                ResumeModule,
                TipsModule,
                Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
                RouterModule.forRoot([]),
            ],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
        });
        TestBed.compileComponents();
    });

    it(
        'should create the app',
        async(() => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        }),
    );
});
