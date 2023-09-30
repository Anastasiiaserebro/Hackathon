export interface DocsType {
    author:     string;
    category:   string;
    date:       string;
    id:         string;
    route:      Route[];
    status:     string;
    statusDate: string;
    title:      string;
}

export interface Route {
    date:   string;
    name:   string;
    number: string;
}
