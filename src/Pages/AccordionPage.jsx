
import Accordion from "../Components/Accordion";
function AccordionPage() {

  const item =[
    {
      label:'hi i am React',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      id: 1


    },
    {
      label:'hi i am js',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      id: 2

    },
    {
      label:'hi i am css',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      id: 3

    }
  ]


  return (
    <div  >
  <Accordion items={item} />
    </div>
   
  );
}

export default AccordionPage;
