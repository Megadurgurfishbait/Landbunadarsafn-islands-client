import Engjar from './Engjar.pdf';
import Gridur from './gridur_jondyri.pdf';
import Islenskir from './islenskir_jardraektarhaettir.pdf';
import Nyting from './nyting_flaediengja.pdf';
import Raektunar from './raektunarminnjar.pdf';



const pdfs = [
      {nr: "1", title: "Engjar - Saga áveitna og notkun engja", author: "Magnús Óskarsson", date:"Mars 2008", link:`${Engjar}` },
      {nr: "2",title: "Gríður, Jón Dýri og Íhaldsmajorinn", author: "Bjarni Guðmundsson", date:"Mars 2008", link: `${Gridur}` },
      {nr: "3",title: "Íslenskir Jarðræktarhættir á 18. og 19. öld", author: "Bjarni Guðmundsson", date:"September 2008", link: `${Islenskir}` },
      {nr: "4",title: "Nýting flæðiengja í Borgarfirði", author: "Ragnhildir Helga Jónsdóttir o.fl.", date:"Febrúar 2012", link: `${Nyting}` },
      {nr: "5",title: "Ræktunarminjar í Ólafsdal", author: "Ragnhildur Helga Jónsdóttir og Bjarni Guðmundsson", date:"2016", link:`${Raektunar}` }
];

export default pdfs;