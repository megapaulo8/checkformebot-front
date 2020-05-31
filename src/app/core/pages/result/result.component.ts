import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Result } from '../../models/result';
import { OptionColor } from '../../models/option-color';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public result: Result;
  public isLoading: boolean;
  public options: OptionColor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private resultService: ResultService
  ) {
    this.isLoading = true;
    this.options = {
      legend: {
        position: 'bottom',
        alignment: 'center',
        textStyle: {
          color: '#ffffff',
          fontSize: 16,
        }
      },
      width: 280,
      border: 'none',
      height: 280,
      chartArea: {
        width: '100%',
        height: '65%'
      },
      backgroundColor: 'none',
      colors: ['#727D88','#228AD4']
    }
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id']) this.getResultById(this.activatedRoute.snapshot.params['id']);
  }

  getResultById(id: string) {
    this.resultService.getResultById(id)
      .subscribe((result: Result) => {
        this.isLoading = false;
        this.result = result;
      })
  }

  redirectToReliableSource(link: string) {
    window.location.href=`${link}`;
  }

}
