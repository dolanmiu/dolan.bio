import { Component, OnInit } from '@angular/core';
import { Game } from '@dolan-bio/water-skills';

import { SkillsService } from './skills.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
    private game: Game;

    constructor(private skillsService: SkillsService) {
        this.game = new Game();
    }

    public ngOnInit(): void {
        this.game.run('skills-container', () => {
            this.skillsService.WhenFetched.subscribe((skills) => {
                this.game.setItemsArray(skills);
            });
        });
    }
}
