import { Component, Input } from '@angular/core';
import { IBieuDoKhgd } from '@models/dao-tao/bieu-do-khgd.model';

@Component({
  selector: 'app-plan-chart',
  templateUrl: './plan-chart.component.html',
  styleUrls: ['./plan-chart.component.scss'],
})
export class PlanChartComponent {
  @Input() data!: IBieuDoKhgd;
}
