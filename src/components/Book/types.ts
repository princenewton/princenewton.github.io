export interface PageProp {
    title: string;
    content: string;
}

export interface TabItem {
    title: string;
    icon: string;
    page? : PageProp;
    to? : string;
}