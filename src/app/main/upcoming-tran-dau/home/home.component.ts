import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { UrlConstant } from '@constants/url.constant';
import { SeoService } from '@services/common/seo.service';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';


import { CsvReaderService } from './csv-reader.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  league: any;
  match: any;
  season: any;
  csvData: any;
  dates: any;
  week: any;
  groupedData: any;

  home_team: any;
  away_team: any;
  current_match: any;

  home_team_df: any;
  away_team_df: any;

  csvData_1: any;

  groupByMatchDate(date: any) {
    return this.csvData.filter(item => item.Full_Date === date);    
  }

  getDayOfWeek(day: string): string {
    if (day === 'Sun') {
      return 'CN';
    } else if (day === 'Sat') {
      return 'Thứ 7';
    } else if (day === 'Fri') {
      return 'Thứ 6';
    } else if (day === 'Thu') {
      return 'Thứ 5';
    } else if (day === 'Wed') {
      return 'Thứ 4';
    } else if (day === 'Tue') {
      return 'Thứ 3';
    } else if (day === 'Mon') {
      return 'Thứ 2';
    } else {
      return day;
    }
  }

  getVenueTime(day: string): string {
    const timestamp = new Date(day).getTime();
    const dateObject = new Date(timestamp);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
  
    // Format the time as HH:mm
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
    return formattedTime;
  }


  returnImage(tag: string): string {
    return '/assets/img/logo/' + tag + '.png';
  }

  isDropdownOpen = false;

  myFunction(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onClickOutside(event: MouseEvent): void {
    if (!(event.target instanceof Element) || !event.target.matches('.dropbtn')) {
      this.isDropdownOpen = false;
    }
  }


  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Upcoming Match',
    listBreadcrumb: [
      {
        title: 'Home',
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
    ],
  });

  constructor(
    private metaSvc: Meta,
    private seoSvc: SeoService,
    
    private csvReader: CsvReaderService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.metaSvc.updateTag({
      name: 'description',
      content: 'Demo 123',
    });
    this.seoSvc.createLink('canonical', '${fe_domain}/product/${product_type}'); // Link to an official page
    this.seoSvc.addScript({
      '@context': 'https://schema.org/',
      '@type': 'Recipe',
      name: 'Name',
      image: 'img-url',
    });

    this.match = this.route.snapshot.paramMap.get('match');

    const csvFilePath = '/assets/View_Ket_Qua.csv';
    this.csvReader.readCsvData(csvFilePath)
      .then(data => {
        this.csvData = data;

        this.current_match = this.csvData.filter(item => item.Match === this.match)

        this.home_team = this.current_match[0].Team_Name
        this.away_team = this.current_match[0].Away_Team
        this.league = this.current_match[0].League_Name

        this.home_team_df = this.csvData.filter(item => item.League_Name === this.league)
        this.home_team_df = this.home_team_df.filter(item => item.Team_Name === this.home_team || item.Away_Team === this.home_team)
        .slice(1, 5);

        this.away_team_df = this.csvData.filter(item => item.League_Name === this.league)
        this.away_team_df = this.away_team_df.filter(item => item.Team_Name === this.away_team || item.Away_Team === this.away_team)
        .slice(1, 5);


        const csvFilePath1 = '/assets/predictions_matches.csv';
        this.csvReader.readCsvData(csvFilePath1)
          .then(data => {
            this.csvData_1 = data.filter(item => item.Match_Key === this.match);
    
            console.log(this.csvData_1);
          })
          .catch(error => {
            console.error('Error reading CSV file:', error);
          });


        console.log(this.match);

      })
      .catch(error => {
        console.error('Error reading CSV file:', error);
      });

  }


  description = 'Tôi đã hoạt động 2 năm trong lĩnh vực BĐS với sức trẻ'
    + ' căng đầy nhiệt huyết, '
    + 'đã giúp tư vấn thành công nhiều giao dịch BĐS'
    + 'cho khách hàng mua nhà và chủ nhà tại thị trường TP. Hồ Chí Minh.';
  cards = [
    {
      imageSrc: '/assets/img/logo/Premier_League_Logo.png',
      title: 'Premier League',
      description: 'Premier League, English professional football (soccer) league established in 1992. The league, which comprises 20 clubs, superseded the first division of the English Football League (EFL) as the top level of football in England.',
    },
    {
      imageSrc: '/assets/img/logo/laliga.png',
      title: 'Laliga',
      description: 'The Liga Nacional de Fútbol Profesional (transl. National Professional Football League), also known as LALIGA (the abbreviation LFP was used until the 2015–16 season), is a sports association responsible for administering the two professional football leagues in Spain, the Primera and Segunda Divisions',
    },
    {
      imageSrc: '/assets/img/logo/seriea.svg',
      title: 'Seria',
      description: "The Serie A, officially known as Serie A TIM for sponsorship reasons, is a professional league competition for football clubs located at the top of the Italian football league system and the winners are awarded the scudetto and the Coppa Campioni d'Italia.",
    },
    {
      imageSrc: '/assets/img/logo/bundesliga.png',
      title: 'Bundesliga',
      description: 'The Introduction of the Bundesliga was the long-debated step of establishing a top-level association football league in Germany in 1963. The new league, the Bundesliga, played its first season in 1963–64 and continues to be the highest league in the country. Its introduction reduced the number of first division teams in Germany from 74 to 16 and finally eliminated the problem of the top-teams having to play uncompetitive teams in regional leagues.',
    },
    {
      imageSrc: '/assets/img/logo/ligue1.png',
      title: 'Ligue 1',
      description: 'Ligue 1, officially known as Ligue 1 Uber Eats for sponsorship reasons, is a French professional league for men`s association football clubs.',
    },
  ];

}
