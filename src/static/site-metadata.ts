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
  siteTitle: 'Iimin486 Running',
  siteUrl: 'https://iimin486-running-page.vercel.app',
  logo: 'https://i2.100024.xyz/2024/03/10/w66uoc.webp',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
