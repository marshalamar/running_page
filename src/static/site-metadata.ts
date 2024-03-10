interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'iimin486 running',
  siteUrl: 'https://iimin486-running-page.vercel.app',
  logo: 'https://imgur.com/a/rdLogJg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
