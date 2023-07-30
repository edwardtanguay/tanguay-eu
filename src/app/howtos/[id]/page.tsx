import rawHowtos from '../../../data/itemtype_howtos.json';

export default function Page({ params }: { params: { id: string } }) {
   const { id } = params;
   const howto = rawHowtos.find(m => String(m.id) === id);

   

   return (
      <div>
         {howto && (
         <div>{howto.title}</div>
         )}
      </div>
   )
}