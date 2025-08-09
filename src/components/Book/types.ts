export interface PageProp {
    title: string;
    content: string;
}

export interface TabItem {
    title: string;
    icon: string;
    page?: React.FC;
    extrapage?: React.FC;
    to? : string;
}