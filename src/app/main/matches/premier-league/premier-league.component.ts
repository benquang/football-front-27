import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UrlConstant } from '@constants/url.constant';
import { SeoService } from '@services/common/seo.service';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';

interface DataItem {
  team: string;
}

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.scss'],
})
export class PremierLeagueComponent implements OnInit {



  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Matches',
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
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  id: any;

  home_team: any;
  away_team: any;

  home_team_stats: any;
  away_team_stats: any;

  home_team_goals: any;
  away_team_goals: any;

  data: any;

  getData(match_id: string) {
    const url = 'http://localhost:8000/api/match/' + match_id + '/';
    this.http.get(url).subscribe(
      (res) => {
        this.data = res;
        this.home_team = this.data.match_stats[0];
        this.away_team = this.data.match_stats[1];

        this.home_team_stats = this.data.match_player_stats.filter((item: DataItem) => item.team === this.home_team.team);
        this.away_team_stats = this.data.match_player_stats.filter((item: DataItem) => item.team === this.away_team.team);

        this.home_team_goals = this.data.match_goals.filter((item: DataItem) => item.team === this.home_team.team);
        this.away_team_goals = this.data.match_goals.filter((item: DataItem) => item.team === this.away_team.team);

        console.log(this.home_team_stats);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  returnImage(tag: string): string {
    return '/assets/img/logo/' + tag + '.png';
  }

  returnLinkMatch(tag: string): string {

    return 'http://localhost:4200/matches_future/' + tag;
  }

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

    this.id = this.route.snapshot.paramMap.get('id');
    this.getData(this.id);
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
