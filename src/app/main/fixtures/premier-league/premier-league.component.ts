import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { UrlConstant } from '@constants/url.constant';
import { SeoService } from '@services/common/seo.service';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';

interface DataItem {
  match_id: string;
  match_week: string;
}

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.scss'],
})
export class PremierLeagueComponent implements OnInit {

  constructor(
    private metaSvc: Meta,
    private seoSvc: SeoService,
    private http: HttpClient
  ) { }

  data: any;


  list_week: any = [];
  list_match_by_week: any;
  returnMatchbyWeek(week: string): any[] {

    return this.data.matchs_infos.filter((item: DataItem) => item.match_week === week);

  }
  returnScores(match: string): any[] {

    return this.data.matchs_model.filter((item: DataItem) => item.match_id === match);

  }

  data_list_2023_2024: any;

  getData(season: string) {
    const url = 'http://localhost:8000/api/matches/Premier_League/' + season + '/';
    this.http.get(url).subscribe(
      (res) => {
        this.data = res;

        this.list_week = Array.from(new Set(this.data.matchs_infos.map((item: DataItem) => item.match_week)));

        console.log(this.returnMatchbyWeek('Matchweek 8'));
      },
      (error) => {
        console.error(error);
      }
    );
  }



  getMatchWeek() {
    const url = 'http://localhost:8000/api/matches/Premier_League/2023-2024/Matchweek_9/';
    this.http.get(url).subscribe(
      (res) => {
        this.data_list_2023_2024 = res;
        //console.log(this.data_list_2023_2024);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  selectedTag = '2023-2024';

  tagColor(tag: string): string {
    return this.selectedTag === tag ? 'blue' : 'grey6';
  }


  filterSeason(tag: string) {

    this.getData(tag);

    this.selectedTag = tag;

  }

  returnImage(tag: string): string {
    return '/assets/img/logo/' + tag + '.png';
  }

  returnLinkMatch(tag: string): string {

    return 'http://localhost:4200/matches/' + tag;
  }

  returnLinkFutureMatch(tag: string): string {

    return 'http://localhost:4200/matches_future/' + tag;
  }

  convertThu(tag: string): string {
    if (tag === 'Monday') {
      return 'T2 ';
    }
    if (tag === 'Tuesday') {
      return 'T3 ';
    }
    if (tag === 'Wednesday') {
      return 'T4 ';
    }
    if (tag === 'Thursday') {
      return 'T5 ';
    }
    if (tag === 'Friday') {
      return 'T6 ';
    }
    if (tag === 'Saturday') {
      return 'T7 ';
    }
    if (tag === 'Sunday') {
      return 'CN ';
    }

    return ' ';
  }



  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Scores & Fixtures',
    listBreadcrumb: [
      {
        title: 'Home',
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
    ],
  });





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

    /*this.getMatchWeek(); */
    /*this.getData('2023-2024');*/


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

  cards1 = [
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
