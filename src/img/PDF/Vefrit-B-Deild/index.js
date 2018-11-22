import ferguson from './fergusonminningar.pdf';
import stadarhus from './gomlustadarhusin.pdf';
import heyturn from './heyturn.pdf';
import jardnafir from './jardnafir.pdf';
import sogukaflar from './sogukaflar um svansa.pdf';
import thufnabani from './thufnabaninn.pdf';
import torfi from './torfi_og_olafsdalsskolinn.pdf';

const pdfs = [
      {nr: "1", title: "Torfi Bjarnason og Ólafsdalsskólinn", author: "Eyjólfur Ingvi Bjarnason", date:"Maí 2008", link: `${torfi}` },
      {nr: "2",title: "Þúfnabaninn", author: "Bjarni Guðmundsson", date:"Desember 2009", link: `${thufnabani}` },
      {nr: "3",title: "Jarðnafar, arfgengi, fertala og svarðhlið", author: "Bjarni Guðmundsson", date:"Nóvember 2011", link: `${jardnafir}` },
      {nr: "4",title: "Varahlutir í Ferguson", author: "Þór Jakobsson", date:"Maí 2012", link: `${ferguson}` },
      {nr: "5",title: "Gömlu staðarhúsin á Hvanneyri", author: "Bjarni Guðmundsson", date:"2008", link: `${stadarhus}` },
      {nr: "6",title: "Sögukaflar um svansa og kanónur", author: "Bjarni Guðmundsson", date:"Nóvember 2013", link: `${sogukaflar}` },
      {nr: "7",title: "Heyturn á hverfanda hveli", author: "Bjarni Guðmundsson", date:"Janúar 2016", link: `${heyturn}` },
];

export default pdfs;