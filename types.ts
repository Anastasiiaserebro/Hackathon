export interface DocsType {
  author: string;
  category: string;
  date: string;
  id: string;
  route: Route[];
  status: string;
  statusDate: string;
  title: string;
}

export interface Route {
  date: string;
  name: string;
  number: string;
}

export interface User {
  accept:       number;
  coins:        number;
  id:           number;
  lvl:          number;
  name:         string;
  new:          number;
  pastDeadline: number;
  productDay:   ProductDay;
  reject:       number;
  succ:         number;
  surname:      string;
  weekResult:   number;
  xp:           number;
  job: string;
}

export interface ProductDay {
  day:    Date;
  signed: number;
}
