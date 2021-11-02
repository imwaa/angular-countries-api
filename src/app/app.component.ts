import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { Theme, ThemeService } from './services/theme.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme: Observable<Theme>;

  constructor(private themeService: ThemeService, private api: ApiService) { }

  ngOnInit() {
    this.theme = this.themeService.mode$;
  }

}
