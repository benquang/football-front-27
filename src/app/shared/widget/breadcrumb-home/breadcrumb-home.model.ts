export class BreadCrumbHome {
  heading: string;
  listBreadcrumb: BreadcrubmHomeObj[];
  constructor(initObj: {
    heading: string;
    listBreadcrumb: BreadcrubmHomeObj[];
  }) {
    this.heading = initObj.heading;
    this.listBreadcrumb = initObj.listBreadcrumb;
  }
}

export interface BreadcrubmHomeObj {
  title: string;
  link: string;
}
