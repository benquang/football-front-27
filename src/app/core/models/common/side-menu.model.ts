export interface SideMenu {
  active: boolean;
  name: string;
  url: string;
  contents: SideMenuContent[];
}

export interface SideMenuContent {
  name: string;
  url: string;
}
