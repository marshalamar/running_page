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
  logo: 'https://tgstate.vercel.app/d/BQACAgUAAx0EcyK3ugACECNl_A_UDYyuAzcQAuiNb0-Om1N_WwACwA8AAkjk4Vcwx2ukNCHokzQE',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
